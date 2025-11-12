/*
 * Copyright (c) Microsoft Corporation. All rights reserved. Licensed under the MIT license.
 * See LICENSE in the project root for license information.
 */

/* global console, document, Excel, Office */

Office.onReady((info) => {
  if (info.host === Office.HostType.Excel) {
    document.getElementById("insertRowsForm").onsubmit = insertRows;
  }
});

/**
 * Inserts the specified number of rows below the current selection
 */
async function insertRows(event) {
  event.preventDefault();

  const rowCountInput = document.getElementById("rowCount");
  const rowCount = parseInt(rowCountInput.value, 10);
  const messageBox = document.getElementById("messageBox");

  // Validate input
  if (isNaN(rowCount) || rowCount < 1 || rowCount > 1000) {
    showMessage("请输入1到1000之间的数字", "error");
    return;
  }

  try {
    await Excel.run(async (context) => {
      // Get the selected range
      const selection = context.workbook.getSelectedRange();
      selection.load("rowIndex");

      await context.sync();

      // Get the row index of the first row in the selection
      const startRowIndex = selection.rowIndex;

      // Get the active worksheet
      const worksheet = context.workbook.worksheets.getActiveWorksheet();
      const usedRange = worksheet.getUsedRange();
      usedRange.load("columnCount");

      await context.sync();

      const columnCount = usedRange.columnCount;

      // Insert rows one by one
      for (let i = 0; i < rowCount; i++) {
        const range = worksheet.getRangeByIndexes(startRowIndex, 0, 1, columnCount);
        range.insert(Excel.InsertShiftDirection.down);
      }

      await context.sync();

      // Show success message
      showMessage(`成功插入 ${rowCount} 行！`, "success");
    });
  } catch (error) {
    showMessage("错误: " + error.message, "error");
    console.error(error);
  }
}

function showMessage(message, type) {
  const messageBox = document.getElementById("messageBox");
  messageBox.textContent = message;
  messageBox.className = "message " + (type === "error" ? "error-message" : "success-message");
  messageBox.style.display = "block";

  // Auto hide message after 3 seconds
  setTimeout(() => {
    messageBox.style.display = "none";
  }, 3000);
}

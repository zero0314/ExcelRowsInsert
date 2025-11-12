/*
 * Copyright (c) Microsoft Corporation. All rights reserved. Licensed under the MIT license.
 * See LICENSE in the project root for license information.
 */

/* global Excel, Office */

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
  const errorMessage = document.getElementById("errorMessage");

  // Validate input
  if (isNaN(rowCount) || rowCount < 1 || rowCount > 1000) {
    errorMessage.textContent = "请输入1到1000之间的数字";
    errorMessage.style.display = "block";
    return;
  }

  errorMessage.style.display = "none";

  try {
    await Excel.run(async (context) => {
      // Get the selected range
      const selection = context.workbook.getSelectedRange();
      selection.load("rowIndex, rowCount");

      await context.sync();

      // Get the row index of the first row in the selection
      const startRowIndex = selection.rowIndex;

      // Insert rows
      const range = context.workbook.worksheets
        .getActiveWorksheet()
        .getRangeByIndexes(
          startRowIndex,
          0,
          1,
          context.workbook.worksheets.getActiveWorksheet().getUsedRange().columnCount
        );

      for (let i = 0; i < rowCount; i++) {
        range.insert(Excel.InsertShiftDirection.down);
      }

      await context.sync();

      // Close the task pane
      closeDialog();
    });
  } catch (error) {
    const errorMessage = document.getElementById("errorMessage");
    errorMessage.textContent = "错误: " + error.message;
    errorMessage.style.display = "block";
    console.error(error);
  }
}

function closeDialog() {
  Office.context.ui.taskPaneRequest.completed();
}

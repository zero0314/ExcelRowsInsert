/******/ (function() { // webpackBootstrap
/*!**********************************!*\
  !*** ./src/commands/commands.js ***!
  \**********************************/
/*
 * Copyright (c) Microsoft Corporation. All rights reserved. Licensed under the MIT license.
 * See LICENSE in the project root for license information.
 */

/* global Office */

Office.onReady(function () {
  // If needed, Office.js is ready to be called.
});

/**
 * Shows a notification when the add-in command is executed.
 * @param event {Office.AddinCommands.Event}
 */
function action(event) {
  var message = {
    type: Office.MailboxEnums.ItemNotificationMessageType.InformationalMessage,
    message: "Performed action.",
    icon: "Icon.80x80",
    persistent: true
  };

  // Show a notification message.
  Office.context.mailbox.item.notificationMessages.replaceAsync("ActionPerformanceNotification", message);

  // Be sure to indicate when the add-in command function is complete.
  event.completed();
}

/**
 * Shows the insert rows dialog
 * @param event {Office.AddinCommands.Event}
 */
function showInsertRowsDialog(event) {
  var dialogUrl = new URL("https://localhost:3000/insert-rows-dialog.html");
  Office.context.ui.displayDialogAsync(dialogUrl.toString(), {
    height: 30,
    width: 40,
    displayInIframe: true
  }, function (asyncResult) {
    if (asyncResult.status === Office.AsyncResultStatus.Failed) {
      console.error("Dialog failed to open: " + asyncResult.error.message);
    } else {
      var dialog = asyncResult.value;
      dialog.addEventHandler(Office.EventType.DialogMessageReceived, function (messageEvent) {
        dialog.close();
      });
    }
    event.completed();
  });
}

// Register the functions with Office.
Office.actions.associate("action", action);
Office.actions.associate("showInsertRowsDialog", showInsertRowsDialog);
/******/ })()
;
//# sourceMappingURL=commands.js.map
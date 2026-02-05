// Google Apps Script for collecting form submissions
//
// SETUP INSTRUCTIONS:
// 1. Create a new Google Sheet with these headers in row 1:
//    Email | Tell me about live shows | I want to get involved | Created at
//
// 2. Go to Extensions > Apps Script
//
// 3. Paste this entire script and save
//
// 4. Click Deploy > New deployment
//    - Select type: Web app
//    - Execute as: Me
//    - Who has access: Anyone
//    - Click Deploy
//
// 5. Copy the deployment URL and update your website form

function doPost(e) {
  try {
    var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();

    var data = JSON.parse(e.postData.contents);

    sheet.appendRow([
      data.email,
      data.liveShow ? 'Yes' : 'No',
      data.musician ? 'Yes' : 'No',
      new Date()
    ]);

    return ContentService
      .createTextOutput(JSON.stringify({ success: true }))
      .setMimeType(ContentService.MimeType.JSON);

  } catch (error) {
    return ContentService
      .createTextOutput(JSON.stringify({ success: false, error: error.message }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}

// Test function - run this to verify the script works
function testDoPost() {
  var testData = {
    postData: {
      contents: JSON.stringify({
        email: 'test@example.com',
        liveShow: true,
        musician: false
      })
    }
  };

  var result = doPost(testData);
  Logger.log(result.getContent());
}

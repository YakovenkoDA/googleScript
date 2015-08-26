function update() {
   //open csv file 
   var csvfile = UrlFetchApp.fetch("https://www.dropbox.com/s/3f06u273eobb4yy/test.csv?dl=1");
   //perse it 
   var obj  = Utilities.parseCsv(csvfile.getContentText(),';');
   //open google  Spreadsheet
   var doc = SpreadsheetApp.openById("15GMJstAHEmGJ4ElG6tfZXDa85onz0ktlfVMCchR0Hfs");
   var cell = doc.getSheetByName("test").getRange('a1');
  //clear old sheet
  doc.getSheetByName("test").clear();
  //set new values 
   for (var index in obj) {
     var row = obj[index];
     for (var col in row) {
      cell.offset(index, col).setValue(row[col]);
     } 
   }
 }


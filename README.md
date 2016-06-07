# Introduction

This little gulp program allows you to take Excel data you extracted from the scientific literature and convert it into a readable HTML format. It basically converts Excel data to JSON data that will be requested from the __index.html__ file accessible in the _report_ directory.

### Excel to JSON transformation

Once you have converted the data from an Excel format to a JSON format, you can do pretty much anything you want with it. This example uses the following rules:

1. Each Excel row converts to a JSON object representing one scientific article.
2. Each Excel column converts to a property of the same name within the scientific article JSON object. 
3. Each JSON object is later pushed to the __articles__ JavaScript array, making an array of scientific article objects 
4. For Excel columns containing multiple elements of information (except for the column named __legend__), each element is seperated with a semicolon, and later split into a JavaScript array of information through this delimiter (i.e. the semicolon). For the __legend__ column, the same principle applies, but with a triple exclamation point delimiter.
5. The last two Excel columns are general comments and findings that will appear at the end of the HTML report. Each cell in these columns represent one general finding or comment, and are looped through a JavaScript array that will be later manipulated to present these information in the HTML file.

### Preview of the Excel file 

<img href="excelpreview.png" width="300px" />

### Preview of the HTML report

<img href="reportpreview.png" width="300px" />


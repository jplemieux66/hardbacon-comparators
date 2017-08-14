# Hardbacon Comparator Generator

A tool to generate comparator tables for [Hardbacon](https://www.hardbacon.ca) using Firebase for the data, jQuery to generate the tables, Bootstrap for styling and Node.js for server-side code. 

## Data Structure 

Each comparator has its table in Firebase.
For each comparator, you have "headers" and "entries"
### Headers
The headers property is an array. Each array contained within it represents a distinct Header Row. Every Header Row except the first Row for the first entry is hidden and can be shown by pressing 'More Details'. 

Every Header is a JSON object with the following properties:
  
  + description: Text to show for tooltip
  + label: Label for the Header
  + valueName: What property of the data entries this header is linked to
  + (OPTIONAL) showLabelOnMobile: When set to false, the label will not be shown on mobile devices.
  
### Entries
Every Entry is a JSON object, and each property represents a value. 

**!! The name of the property must always match the valueName set on the Header !!**

  If you want the text to show on multiple lines, you can create an Array of strings. Each value in the array will be shown on a separate   line.
  
  If the property value is a url or a file ending in either '.png', '.gif', '.jpg' or '.jpeg', an image will be shown instead of text.
  
  Finally, if there is a promotional offer, the description can be put in the property value, and a button which activates the popup will   be created. 
  
  **Make sure the 'name' property is correctly set so the popup text is accordingly adjusted**
   

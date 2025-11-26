/* Table Properties :- 
 table.rows → Collection of <tr> elements
 table.caption → Reference to <caption>
 table.tHead → Reference to <thead>
 table.tFoot → Reference to <tfoot>
 table.tBodies → Collection of <tbody> elements
 tbody.rows → Collection of <tr> inside a <tbody>
*/

/*
Row (tr) Properties :-
tr.cells → Collection of <td> and <th> elements inside that row
tr.sectionRowIndex → Index of the <tr> inside its enclosing section (thead, tbody, or tfoot)
tr.rowIndex → Row number starting from 0 (relative to the entire table) */

/*
Cell (td) Properties :-
td.cellIndex → Number (index) of the cell inside the enclosing <tr> 
*/
let t=document.body.firstElementChild.firstElementChild; // t is table here
console.log(t);
console.log(t.rows); // prints all table rows

console.log(typeof document);
console.log(typeof window);
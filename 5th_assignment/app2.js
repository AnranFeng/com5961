$(document).ready(function(){  
      $('#data-table').DataTable({  
           // "ajax"     :     "company_data.json",  
           "ajax"     :     "http://dev-com5961a.pantheonsite.io/company-product",
           "columns"     :     [  
           /*
                {     "data"     :     "name"     },  
                {     "data"     :     "gender"},  
                {     "data"     :     "designation"}  
           */
                {     "data"     :     "company"},  
                {     "data"     :     "product_code"},  
                {     "data"     :     "Number"},  
                {     "data"     :     "address"},
                {     "data"     :     "city"},
                {     "data"     :     "country"},
                {     "data"     :     "name"}
           ]  
      });  
 });   
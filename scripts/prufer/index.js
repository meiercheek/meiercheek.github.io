let treeEdges =  (array, m) =>
    { 
        let result = new Array();
        let index = 0;
        let vertices = m + 2; 
        let vertex_set= new Array();
        let i, j;

        for (i = 0; i < vertices; i++) 
            vertex_set[i] = 0; 
  

        for (i = 0; i < vertices - 2; i++) 
            vertex_set[array[i] - 1] += 1; 

        j = 0; 
        for (i = 0; i < vertices - 2; i++) { 
            for (j = 0; j < vertices; j++) { 
                if (vertex_set[j] == 0) { 
 
                    vertex_set[j] = -1; 

                    result[index++] = "(" + (j + 1) + ", " + array[i] + ") ";

                    //console.log("(" + (j + 1) + ", "
                                     //+ array[i] + ") "); 
  
                    vertex_set[array[i] - 1]--; 
  
                    break; 
                } 
            } 
        } 
  
        j = 0;
        for (i = 0; i < vertices; i++) { 
            if (vertex_set[i] == 0 && j == 0) { 
                result[index++] = "(" + (i + 1) + ", "; 
                j++; 
            } 
            else if (vertex_set[i] == 0 && j == 1) 
                result[index++] = (i + 1) + ")"; 
        } 

        let para = document.createElement("p");
          
        
        let element = document.getElementById("output");
         
        let dark = sessionStorage.getItem('dark');

        for(i = 0; i < result.length; i++){
            let node = document.createTextNode(result[i]);
            //document.getElementById("result").innerHTML = result[i];
            
            para.appendChild(node);
             if(dark == "true"){
                para.style.color = 'white'; 
            }
            else if(dark == "false"){
                para.style.color = 'black'; 
            }

            para.className = 'res';
            
            element.appendChild(para);
            
        }
    } 


    let start = () => { 
        sequence = document.getElementById("seq").value;
        let array = JSON.parse("[" + sequence + "]");
        //const prufer = [ 3,1,4,2,8,2,5,3,3 ]; 
        //const prufer = [1,1,3,5,5];
        let n = array.length; 
        treeEdges(array, n); 
    } 
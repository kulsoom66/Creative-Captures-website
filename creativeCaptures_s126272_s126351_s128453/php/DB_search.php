<html>
<body>

<?php
//get search value
$searchType = $_POST['searchType'];
$searchName = $_POST['searchName'];
if(isset($_POST['s_submit'])){
    $servername= "localhost";
    $username = "root";
    $password = "";
    $dbname= "reanted_tools";
    // Create connection
    $conn = mysqli_connect($servername, $username, $password, $dbname);
    // Check connection
    if (!$conn) {
    die("Connection failed: " . mysqli_connect_error());
    }
    else {
        //if the searchType text box and searchName text nox not empty
        if(!empty($searchType) && !empty($searchName) ){
            //search using the name and the type
            $sql= "SELECT * FROM rentingtools where tool_name = '$searchName' And type_tool = '$searchType' ";
            $result = mysqli_query($conn, $sql);
            print "The search result: <br />";
            if (mysqli_num_rows($result) > 0) {
                //display the result
                while($row = mysqli_fetch_assoc($result)) {
                    echo   "Tool Name:". $row["tool_name"]." ". "<br>";
                    echo   "rent price:". $row["rent_price"]." ". "<br>";
                    echo   "Tool type:". $row["type_tool"]." ". "<br>";
                    
                }
            } else {
                echo "0 results";
            }
        }
        //if searchType text box it not emptym but the searchName is
        elseif(!empty($searchType) && empty($searchName)){
            //search using the type only
            $sql= "SELECT * FROM rentingtools where type_tool = '$searchType' ";
            $result = mysqli_query($conn, $sql);
            print "The search result: <br />";
            if (mysqli_num_rows($result) > 0) {
                //display the result
                while($row = mysqli_fetch_assoc($result)) {
                    echo   "Tool Name:". $row["tool_name"]." ". "<br>";
                    echo   "rent price:". $row["rent_price"]." ". "<br>";
                    echo   "Tool type:". $row["type_tool"]." ". "<br>"; 
                    echo "---------------------------------------------"."<br>";   
                }
            } else {
                echo "0 results";
            }
        }


        mysqli_close($conn);
    }
    

    
}
?>
</body>
</html>
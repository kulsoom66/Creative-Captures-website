<html>
<body>
<?php
$id_tool= $_POST['id_tool']; 
$rent_price= $_POST['rent_price'];
if(!empty($id_tool) && !empty($rent_price)){
    //connection
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
        //serch if there is a matching ID
        $sql= "SELECT * FROM rentingtools where tool_id = '$id_tool'";
        $result = mysqli_query($conn, $sql);
        //if found
        if (mysqli_num_rows($result) > 0){  
            //udapte the price for the tool                           
            $sql = "UPDATE rentingtools SET rent_price= '$rent_price' WHERE tool_id = '$id_tool' ";
            if($conn->query($sql)){
                echo "Sucessfully Update";
            }else{
                echo "Error,This tool is not exist so can't make updat ".$sql ."<br>". $conn->error;
            }
        }
        else{
            //if there is no matching, 
            echo "There is no a matching ID";
        }

        $conn->close();
}
}

?>
</body>
</html>
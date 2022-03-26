<html>
<body>
<?php
$id_tool= $_POST['id_tool']; 
$name_tool= $_POST['name_tool'];
$rent_price= $_POST['rent_price'];
$type_tooll= $_POST['type_tooll'];
if(!empty($id_tool) && !empty($name_tool) && !empty($rent_price) && !empty($type_tooll)){
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
        //if Not found
        if (mysqli_num_rows($result) <= 0){
        //insert the know tool
        $sql = "INSERT INTO rentingtools(tool_id,tool_name ,rent_price,type_tool) 
                                  VALUES('$id_tool','$name_tool','$rent_price','$type_tooll')";//value
                        
        if($conn->query($sql)){
            echo "Sucessfully insertion";
        }else{
            echo "Error,This tool already exist: ".$sql ."<br>". $conn->error;
        }
    }
    else{
        // if there is a mathing,
        echo "There is a matching ID";
    }
        $conn->close();
}
}
?>
</body>
</html>
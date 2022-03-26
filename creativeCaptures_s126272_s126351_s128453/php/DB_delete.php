<html>
<head>
</head>
<body>
    <?php
    $servername= "localhost";
    $username = "root";
    $password = "";
    $dbname= "reanted_tools";

    $tool_id = $_POST['id_tool'];
    // Create connection
    $conn = mysqli_connect($servername, $username, $password, $dbname);
    // Check connection
    if (!$conn) {
        die("Connection failed: " . mysqli_connect_error());
    }
    else {
        //serch if the id is exite
        //serch if there is a mach ID 
        $sql= "SELECT * FROM rentingtools where tool_id like '$tool_id'";
        $result = mysqli_query($conn, $sql);
        //if found
        if (mysqli_num_rows($result) > 0){
        //delete the record
        $sql= "DELETE FROM rentingtools WHERE tool_id= '$tool_id'";
        if ($conn->query($sql) === TRUE) {
            echo "The tool is deleted successfully";
        } else {
            echo "Error deleting record: " . $conn->error;
        }
    }
    //if there is no maching
    else{
        echo "The tool is not exist";
    }
}
    mysqli_close($conn);
?>
</body>
</html>
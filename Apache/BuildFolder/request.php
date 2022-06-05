
<?php
	
	$redis = new Redis();
	$redis->connect('myredis');

	if($_SERVER['REQUEST_METHOD'] == 'GET'){
		$messages = $redis->lrange('Messages', 0, -1);
		foreach ($messages as $message) {
			$return_arr[] = array("mess" => $message);
		}
		echo json_encode($return_arr);
	}
	
?>
<?php
if(isset($_POST['message'])){
	$redis->lpush('Messages', $_POST['message']);
	echo "ok";
} 
?>



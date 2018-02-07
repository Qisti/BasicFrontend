<html>
<head>
	<title>Form Registrasi</title>
	<link rel="stylesheet" type="text/css" href="style.css">
</head>

<style>
	body {
			 font-family: Arial;
		}
		
		.tombol {
			background-color: #ff1111;
			border: none;
			color: white;
			padding: 15px 15px;
		}
		
		#form1layout {
			padding: 10px;
			widht: 390px;
            border: solid 1px #a1a1a1;
            background-color: #fff8dc;
		}
		
		#form1layout label {
			text-align: right;
			padding-right: 10px;
			width: 80px;
			display: inline-block;
			margin-bottom: 10px;
		}
		
		#form1layout input[type="text"], #regForm textarea {
			width: 300px;
		}
</style>

<body>
	<h1 align="center">Form Registrasi</h1>
<form name="formulir">
	<div id="form1layout">
		<label>Nama : </label><input type="text" name="nama" value="" /><br>
		<label>Jenis Kelamin : </label><input type="radio" name="gender" value="laki" />L
		<input type="radio" name="gender" value="perempuan" /> P<br>
		<label>Tanggal Lahir : </label><input type="text" name="tglLahir" value="" /><br>
		<label>Alamat : </label><textarea rows="4" cols="40"></textarea><br>
		<button >Submit</button>

	</div>
    </form>
    

</body>
</html>

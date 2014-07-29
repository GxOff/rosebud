<html>
	<body>
		<table align='left'>
			<?php
				print("
				  <form name='SearchTerms' action=test.php method='GET'>
				  <tr><td><b>Enter Keywords</b><br><input type='text' name='Keywords' size='40'/></td></tr>
				  <input type='hidden' name='Action' value='Search'>
				  <tr align='center'><td><input type='submit'/></td></tr>
				  </form> ");
			?>
		</table>
	</body>
</html>
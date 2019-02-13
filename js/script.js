document.addEventListener("DOMContentLoaded", function(event) { 
function toggleMenu(visible) {
  document.querySelector('.menu').classList.toggle('show', visible)
}
document.querySelector('a.logo').addEventListener('click', function(e) {	
  e.preventDefault();
  toggleMenu()
});
	var ctx = document.getElementById('myChart').getContext('2d');

	var chart = new Chart(ctx, {
		// 1
		type: 'bar',
		data: {
			// 2
			labels: ["01", "02", "03", "04", "05", "06", "07", "08", "09", "10"],
			// 3
			datasets: [{
				// 4
				label: "Signups",
				// 5
				backgroundColor: '#8DBEC8',
				borderColor: '#8DBEC8',
				// 6
				data: [ 340, 200, 220, 370, 440, 400, 280, 260, 210, 290 ],
			},
			{
				label: "FTD",
				backgroundColor: '#F29E4E',
				borderColor: '#F29E4E',
				data: [ 410, 170, 300, 260, 450, 110, 200, 501, 360, 310 ],
			},
			{
				label: "Earned",
				backgroundColor: '#71B374',
				borderColor: '#71B374',
				data: [ 59, 49, 68, 90, 67, 41, 13, 38, 48, 48 ],
				// 7
				hidden: true,
			}]
		},
	});
});
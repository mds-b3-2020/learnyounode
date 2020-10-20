const net = require('net')
const [_node, _path, portNumber] = process.argv;

const formatNumber = number => {
  //return (i < 10 ? '0' : '') + i
	if (number < 10) {
		return `0${number}`
	}
	
	return number;
}
const server = net.createServer((socket) => {

	const date = new Date();
	const year = date.getFullYear();
	const month = formatNumber(date.getUTCMonth() + 1);
	const monthDate = formatNumber(date.getDate());
	const hours = formatNumber(date.getHours());
	const minutes = formatNumber(date.getMinutes());

	const formattedDate = `${year}-${month}-${monthDate} ${hours}:${minutes}`;

	socket.end(formattedDate);

}).on('error', (err) => {
  throw err;
});

server.listen(portNumber);

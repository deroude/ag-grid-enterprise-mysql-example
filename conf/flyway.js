module.exports= {
	url: `jdbc:postgresql://localhost:5432/ag`,
	schemas: 'public',
	locations: 'filesystem:'+__dirname+'/sql',
	user: 'ag',
	password: 'ag',
	sqlMigrationSuffix: '.sql'
};
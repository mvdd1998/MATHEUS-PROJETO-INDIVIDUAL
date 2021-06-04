



module.exports = (sequelize, DataTypes) => {
    let Comentar = sequelize.define('Comentar',{
		id: {
			field: 'idcomentar',
			type: DataTypes.INTEGER,
			primaryKey: true,
			autoIncrement: true
		},		
		comentario: {
			field: 'comentario',
			type: DataTypes.STRING,
			allowNull: false
		},
		fkusuario: {
			field: 'fk_usuario',
			type: DataTypes.INTEGER,
			allowNull: false
		}
		
	}, 
	{
		tableName: 'comentar', 
		freezeTableName: true, 
		underscored: true,
		timestamps: false,
	});

    return Comentar;
};

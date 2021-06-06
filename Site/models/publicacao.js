

module.exports = (sequelize, DataTypes) => {
    let Publicacao = sequelize.define('Publicacao',{	
		id: {
			field: 'id',
			type: DataTypes.INTEGER,
			primaryKey: true,
			autoIncrement: true
		},	
        descricao: {
            field: 'descricao',
            type: DataTypes.STRING,
            allowNull: false
        },
        fkUsuario: {
            field: 'fkUsuario',
            type: DataTypes.INTEGER,
            allowNull: false
        },
		fkLancamento: {
            field: 'fkLancamento',
            type: DataTypes.INTEGER,
            allowNull: true
        }
	}, 
	{
		tableName: 'publicacao', 
		freezeTableName: true, 
		underscored: true,
		timestamps: false,
	});

    return Publicacao;
};

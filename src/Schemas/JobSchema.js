export default class JobSchema{
    static schema = {
        name: 'Job',
        primaryKey: 'id',
        properties:{
            id:{ type: 'int', indexed: true},
            name: 'string',
            office: 'string'
        }
    }
}
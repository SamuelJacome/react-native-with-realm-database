import Realm from 'realm';


import JobSchema from '../Schemas/JobSchema';

export default function getRealm(){
    return Realm.open({
        schema: [JobSchema],
    })
}
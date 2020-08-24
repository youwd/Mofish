import Realm from 'realm';

/***表定义区**/
export const HistoryTableName = 'History';
export const CityTableName = 'City';

export const UserInfoTabelName = 'UserInfo';

const UserInfoSchema = {
    name: UserInfoTabelName,
    primaryKey: 'uid',
    properties: {
        uid: 'string',
        account: 'string',
        phone: 'string',
        nickName: 'string?',
        gender: 'int',
        islunar: 'int?',
        birthday: 'date?',
        roleId: 'int',
        avatar: 'string?',
        modifyTime: 'date?',
    }
};

const HistorySchema = {
    name: HistoryTableName,
    primaryKey: 'id',
    properties: {
        id: 'int',
        name: 'string',
    }
};


const CitySchema = {
    name: CityTableName,
    primaryKey: 'city_id',
    properties: {
        city_id: 'int',
        city_name: 'string',
    }
};

const instance = new Realm({
    schema: [
        HistorySchema,
        CitySchema,
        UserInfoSchema
    ],
    deleteRealmIfMigrationNeeded: true,
    inMemory: false,
});


/**
 * 新增信息
 * @param {*} tabName 表名
 * @param {*} obj 数据
 */
export function writeToRealm(tabName, obj) {
    console.log("writeToRealm",obj);
    return new Promise((resolve, reject) => {
        try {
            instance.write(() => {
                instance.create(tabName, obj, true)
                console
                resolve(true)
            })
        } catch (e) {
            console.log("writeToRealmError");
            reject(e);
        }

    })
}



/**
 * 修改信息
 * @param {*} tabName 表名
 * @param {*} obj 数据
 */
export function updateToRealm(tabName, obj) {
    return new Promise((resolve, reject) => {
        instance.write(() => {
            instance.create(tabName, obj, 'modified')
            resolve(true)
        })
    })
}


export function queryAllFromRealm(tabName) {
    return new Promise((resolve, reject) => {
        let obj = instance.objects(tabName);
        let objStr = JSON.stringify(obj);
        resolve(JSON.parse(objStr))
    })
}

export function clearAllFromRealm(tabName) {
    return new Promise((resolve, reject) => {
        instance.write(() => {
            let arrays = instance.objects(tabName);
            instance.delete(arrays);
            resolve(true)
        })
    })
}


export function clearRowFromRealm(id, tabName) {
    return new Promise((resolve, reject) => {
        instance.write(() => {
            let arrays = instance.objects(tabName);
            let row = arrays.filtered('id==' + id);
            instance.delete(row);
            resolve(true)
        })
    })
}

const _readAllData = () => {
    queryAllFromRealm(HistoryTableName).then((list) => {
        for (let key in list) {
            console.log(list[key].name);
        }
    });
}

export function realmDBPath() {
    console.log(instance.path);

    // realmDBPath();

    // clearAllFromRealm(HistoryTableName);

    // let row1 = { "id": 1, "name": "战狼1" };
    // writeToRealm(row1, HistoryTableName).then(() => {
    //     // ToastAndroid.show('写入完成1', ToastAndroid.SHORT);
    // });
    // let row2 = { "id": 2, "name": "战狼2" };
    // writeToRealm(row2, HistoryTableName).then(() => {
    //     // ToastAndroid.show('写入完成2', ToastAndroid.SHORT);
    // });

    // _readAllData();
}
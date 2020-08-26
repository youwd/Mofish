import Realm from 'realm';

/**登录用户信息表 */
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
        loginTime: 'date?',
    }
};

/**好友信息表 */
export const FriendsInfoTabelName = 'Friends';
const FriendsInfoSchema = {
    name: FriendsInfoTabelName,
    primaryKey: 'fid',
    properties: {
        fid: 'string',
        account: 'string',
        phone: 'string',
        nickName: 'string?',
        remarkName: 'string?',
        gender: 'int',
        islunar: 'int?',
        birthday: 'date?',
        roleId: 'int',
        avatar: 'string?',
        modifyTime: 'date?',
        loginTime: 'date?',
    }
};

/**消息记录表 */
export const MessageTableName = 'Message';
const MessageSchema = {
    name: MessageTableName,
    primaryKey: 'mid',
    properties: {
        mid: 'string',
        uid:'string',
        rid:'string',
        messageType:'int',
        message:'string',
        modifyTime: 'date',
    }
};

/**房间基本信息表 */
export const RoomTableName = 'Room';
const RoomSchema = {
    name: RoomTableName,
    primaryKey: 'rid',
    properties: {
        rid: 'string',
        persons: 'string',
    }
};

const instance = new Realm({
    schema: [
        UserInfoSchema,
        FriendsInfoSchema,
        MessageSchema,
        RoomSchema,
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
class event {
    constructor() {
        this.emits = {}
    }

    emit(name, data) {
        if (this.emits[name]) {
            this.emits[name].data = data
        } else {
            this.emits[name] = { data };
        }
    }

    on(name, callback) {
        try {
            let target = this.emits[name]
            callback(target.data)
            return true;
        } catch (e) {

            return false;
        }
        // let target = this.emits[name]

        // if (target.data) callback(target.data)

    }

    remove(name) {
        delete this.emits[name]
            // try {
            //     delete this.emits[name]
            // } catch (e) {
            //     console.error('别老想搞什么飞机，删除我有的东西！');
            // }

    }
    once(name, callback) {
        this.on(name, (data) => { callback(data) }) ?
            this.remove(name) : null;
    }

}

export default new event()
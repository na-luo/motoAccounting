const localStorageKeyName = 'recordList'
const model = {
    fetch(){
        return JSON.parse(window.localStorage.getItem('recordList') ||'[]') as RecordItem[];
    },
    save(data: RecordItem[]){
        window.localStorage.setItem(localStorageKeyName, JSON.stringify(data));
    }
}
export default model
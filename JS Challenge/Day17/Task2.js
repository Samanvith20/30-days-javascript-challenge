
class Node{
    constructor(value){
       
    this.value=value
    this.next=null
    }
}
  
class linkedlist{
      constructor(){
        this.head=null
      }
      insert(value) {
        const newNode = new Node(value);
        if (this.head === null) {
            this.head = newNode;
        } else {
            let current = this.head;
            while (current.next !== null) {
                current = current.next;
            }
            current.next = newNode;
        }
    }
           

        remove(){
            if(this.head==null){
                return null
        }
        else{
            let current=this.head
            while(current.next.next!=null){
                current=current.next
            }
            current.next=null
        }
    }
    print(){
        let current=this.head
        while(current!=null){
            console.log(current.value)
            current=current.next
        }
    }
}

const list=new linkedlist()
list.insert(1)
list.insert(2)
list.insert(3)
list.insert(4)
list.insert(5)
list.remove()
list.print()
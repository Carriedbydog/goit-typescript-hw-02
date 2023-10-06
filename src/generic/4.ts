/*
  Використовуйте generics та інтерфейси, щоб виправити помилку в наступних класах:
*/

interface CompProp {
  title: string
}

class Component<T> {
  constructor (public props:T) {

  }
}

class Page extends Component<CompProp> {
  pageInfo ():void {
    console.log(this.props.title);
  }
}

export {};
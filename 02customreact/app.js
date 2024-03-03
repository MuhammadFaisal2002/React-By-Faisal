const create = document.querySelector('#Root')
const NewElement ={
    Name : 'a',
    props :{
        href : "www.Google.com",
        target : "_blank"
    },
    Children : "Click me 2 visit google"

}
function CustomReader(NewElement , create){
    const elem = document.createElement(NewElement.Name)
    elem.innerHTML = NewElement.Children
    elem.setAttribute('href' , NewElement.props.href)
    elem.setAttribute('target' , NewElement.props.target)
    create.appendChild(elem)
}
CustomReader(NewElement , create)
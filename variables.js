
const imgs = [
    

    {title:"Max Verstappen",  url:"https://soymotor.com/sites/default/files/styles/thumbnail_150x150/public/2024-02/max-verstappen-2024.png?h=d011db5b&itok=_z663YS-"},
    {title:"Sergio  Perez", url:"https://soymotor.com/sites/default/files/styles/thumbnail_150x150/public/2024-02/sergio-perez-2024.png?h=d011db5b&itok=UvBBfjj1"},

    {title:"Lewis Hamilton", url:"https://soymotor.com/sites/default/files/styles/thumbnail_150x150/public/2024-02/lewis-hamilton-2024.png?h=d011db5b&itok=aJVTmZ6l"},
    {title:"George Russell", url:"https://soymotor.com/sites/default/files/styles/thumbnail_150x150/public/2024-02/george-russell-2024.png?h=d011db5b&itok=ycx5-H8z"},

    {title:"Charles Leclerc", url:"https://soymotor.com/sites/default/files/styles/thumbnail_150x150/public/2024-02/charles-leclerc-2024.png?h=d011db5b&itok=oqpOKiJj"},
    {title:"Carlos Sainz", url:"https://soymotor.com/sites/default/files/styles/thumbnail_150x150/public/2024-02/carlos-sainz-2024.png?h=d011db5b&itok=l16YoAyu"},

    {title:"Lando Norris", url:"https://soymotor.com/sites/default/files/styles/thumbnail_150x150/public/2024-02/lando-norris-2024.png?h=d011db5b&itok=TGo9XVQy"},
    {title:"Oscar Piastri", url:"https://soymotor.com/sites/default/files/styles/thumbnail_150x150/public/2024-02/oscar-piastri-2024.png?h=d011db5b&itok=FNw4usbU"},

    {title:"Alex Albon", url:"https://soymotor.com/sites/default/files/styles/thumbnail_150x150/public/2024-02/alexander-albon-2024.png?h=d011db5b&itok=xqTa1ybL"},
    {title:"Logan Sargeant",  url:"https://soymotor.com/sites/default/files/styles/thumbnail_150x150/public/2024-02/logan-sargeant-2024.png?h=d011db5b&itok=SkZAjxFg"},

    {title:"Fernando Alonso", url:"https://soymotor.com/sites/default/files/styles/thumbnail_150x150/public/2024-02/fernando-alonso-2024.png?h=d011db5b&itok=I89vIdvE"},

    {title:"Nico Hulkenberg", url:"https://soymotor.com/sites/default/files/styles/thumbnail_150x150/public/2024-02/nico-hulkenberg-2024.png?h=d011db5b&itok=xi1jwpVd"},
    {title:"Pierre Gasly", url:"https://soymotor.com/sites/default/files/styles/thumbnail_150x150/public/2024-02/pierre-gsly-2024.png?h=d011db5b&itok=rcpIqgNp"},
    
    {title:"Valteri Bottas", url:"https://soymotor.com/sites/default/files/styles/thumbnail_150x150/public/2024-02/valtteri-bottas-2024.png?h=d011db5b&itok=cLlYqVXO"},
    
];





const handlerBarsContext = {
    "/index.html": {

        "imgs": imgs,
    },

}
const pageContext = (page)=>{
    const context= {...handlerBarsContext[page]}
    return context;
}
export default pageContext;
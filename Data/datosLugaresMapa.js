const puntos = [
{
    id: 1,
    nombre: 'Mundo magico',
    latitude: 27.480340,
    longitude: -109.941346,
    informacion: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin vel nisl ut leo cursus sagittis eu ac sem. Mauris quis fermentum nunc, bibendum maximus augue. Ut eu ipsum eu lectus euismod consectetur vel sit amet enim. Suspendisse cursus ut nisl vel auctor. Fusce at est libero. Mauris ut velit lobortis, sollicitudin orci ac, lacinia justo. Vestibulum convallis vulputate metus, non molestie magna porttitor eget. In hac habitasse platea dictumst. Quisque eget ipsum in nunc euismod vehicula. Etiam maximus, velit et sollicitudin placerat, odio est feugiat lectus, laoreet venenatis nisl mi ut enim. Sed id ante at ligula posuere tristique ac nec tortor. Vivamus et posuere lacus. Duis eget malesuada neque, in tincidunt ante. Curabitur consequat odio ipsum, sit amet molestie ligula porta et.',
    icono: 'https://kentuckylandscape.ca/wp-content/uploads/2019/12/fb-icon.png',
    imagen: 'https://static.wikia.nocookie.net/los-padrinos-magicos4real/images/7/7c/Tumblr_lfu4jdyHQL1qb82q8o1_500_large.jpg/revision/latest?cb=20180328215059&path-prefix=es'
},
{
    id: 2,
    nombre: 'Punto 2',
    latitude: 27.501326,
    longitude: -109.928579,
    informacion: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin vel nisl ut leo cursus sagittis eu ac sem. Mauris quis fermentum nunc, bibendum maximus augue. Ut eu ipsum eu lectus euismod consectetur vel sit amet enim. Suspendisse cursus ut nisl vel auctor. Fusce at est libero. Mauris ut velit lobortis, sollicitudin orci ac, lacinia justo. Vestibulum convallis vulputate metus, non molestie magna porttitor eget. In hac habitasse platea dictumst. Quisque eget ipsum in nunc euismod vehicula. Etiam maximus, velit et sollicitudin placerat, odio est feugiat lectus, laoreet venenatis nisl mi ut enim. Sed id ante at ligula posuere tristique ac nec tortor. Vivamus et posuere lacus. Duis eget malesuada neque, in tincidunt ante. Curabitur consequat odio ipsum, sit amet molestie ligula porta et.',
    icono: 'https://w7.pngwing.com/pngs/434/247/png-transparent-fb-social-icons-circular-black-icon.png',
    imagen: 'https://static.wikia.nocookie.net/fairlyoddparents/images/a/a2/2017-01-18-212135.jpg/revision/latest?cb=20170211071558&path-prefix=en'
},
{
    id: 3,
    nombre: 'Casa Dinkelberg',
    latitude: 27.489330,
    longitude: -109.943858,
    informacion: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin vel nisl ut leo cursus sagittis eu ac sem. Mauris quis fermentum nunc, bibendum maximus augue. Ut eu ipsum eu lectus euismod consectetur vel sit amet enim. Suspendisse cursus ut nisl vel auctor. Fusce at est libero. Mauris ut velit lobortis, sollicitudin orci ac, lacinia justo. Vestibulum convallis vulputate metus, non molestie magna porttitor eget. In hac habitasse platea dictumst. Quisque eget ipsum in nunc euismod vehicula. Etiam maximus, velit et sollicitudin placerat, odio est feugiat lectus, laoreet venenatis nisl mi ut enim. Sed id ante at ligula posuere tristique ac nec tortor. Vivamus et posuere lacus. Duis eget malesuada neque, in tincidunt ante. Curabitur consequat odio ipsum, sit amet molestie ligula porta et.',
    icono: 'http://www.ariadne-comunicacion.com/blog/wp-content/uploads/2018/06/icono-fb.png',
    imagen: 'https://static.wikia.nocookie.net/fairlyoddfanon/images/c/cc/The_Dinkleberg%27s_House.png/revision/latest?cb=20170709082400'
},
{
    id: 4,
    nombre: 'Punto 4',
    latitude: 27.487779,
    longitude: -109.948010,
    informacion: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin vel nisl ut leo cursus sagittis eu ac sem. Mauris quis fermentum nunc, bibendum maximus augue. Ut eu ipsum eu lectus euismod consectetur vel sit amet enim. Suspendisse cursus ut nisl vel auctor. Fusce at est libero. Mauris ut velit lobortis, sollicitudin orci ac, lacinia justo. Vestibulum convallis vulputate metus, non molestie magna porttitor eget. In hac habitasse platea dictumst. Quisque eget ipsum in nunc euismod vehicula. Etiam maximus, velit et sollicitudin placerat, odio est feugiat lectus, laoreet venenatis nisl mi ut enim. Sed id ante at ligula posuere tristique ac nec tortor. Vivamus et posuere lacus. Duis eget malesuada neque, in tincidunt ante. Curabitur consequat odio ipsum, sit amet molestie ligula porta et.',
    icono: 'https://cdn4.iconfinder.com/data/icons/social-icon-4/842/facebook-512.png',
    imagen: 'https://static.wikia.nocookie.net/fairlyoddfanon/images/b/b5/Dimmsdale_Elementary_School_image.png/revision/latest?cb=20170409024746'
},
{
    id: 5,
    nombre: 'Punto 5',
    latitude: 27.484570,
    longitude: -109.919573,
    informacion: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin vel nisl ut leo cursus sagittis eu ac sem. Mauris quis fermentum nunc, bibendum maximus augue. Ut eu ipsum eu lectus euismod consectetur vel sit amet enim. Suspendisse cursus ut nisl vel auctor. Fusce at est libero. Mauris ut velit lobortis, sollicitudin orci ac, lacinia justo. Vestibulum convallis vulputate metus, non molestie magna porttitor eget. In hac habitasse platea dictumst. Quisque eget ipsum in nunc euismod vehicula. Etiam maximus, velit et sollicitudin placerat, odio est feugiat lectus, laoreet venenatis nisl mi ut enim. Sed id ante at ligula posuere tristique ac nec tortor. Vivamus et posuere lacus. Duis eget malesuada neque, in tincidunt ante. Curabitur consequat odio ipsum, sit amet molestie ligula porta et.',
    icono: 'https://png.pngtree.com/png-clipart/20180515/ourmid/pngtree-facebook-icon-png-image_3566125.png',
    imagen: 'https://static.wikia.nocookie.net/fairlyoddfanon/images/5/57/Dr._Bender%27s_House.jpg/revision/latest?cb=20170430170254'
},
]

export default puntos
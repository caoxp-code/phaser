class ScenePage extends Phaser.Scene {
  constructor () {
    super()
  }
  preload () {
    // 加载背景图片资源
    this.load.image('bg', 'assets/sky.png')
  }
  create () {
    // 将图片添加到scene中
    this.add.image(400, 300, 'bg')
    // 添加文本信息
    this.add.text(400, 32, 'Hello,World', {color: '#00ff00'})
  }
  update () {

  }
}
const config = {
  type: Phaser.AUTO,
  width: 800,
  height: 600,
  backgroundColor: '#2d2d2d',
  parent: 'phaser-example',
  scene: [ScenePage],
  title: 'action game'
}
const game = new Phaser.Game(config)
console.log(game)
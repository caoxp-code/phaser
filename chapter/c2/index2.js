class ScenePage extends Phaser.Scene {
  constructor () {
    super()
  }
  preload () {
    // 加载单个纹理图
    // this.load.atlas('cityscene', 'chapter/c2/cityscene.png', 'chapter/c2/cityscene.json')
    // 加载过个纹理资源
    this.load.multiatlas('cityscene', 'chapter/c2/cityscene.json', 'chapter/c2')
  }
  create () {
    // 将背景图精灵添加到屏幕中,返回Sprite对象
    const bg = this.add.sprite(0, 0, 'cityscene', 'background.png')
    // 添加第一张帧图,返回Sprite对象
    this.capguy = this.add.sprite(0, 400, 'cityscene', 'walk/0005.png')
    console.log('this.cap:', this.capguy)
    // 将图片缩小
    this.capguy.setScale(0.5, 0.5)
    // 创建一组帧
    const frameNames = this.anims.generateFrameNames('cityscene', {start: 1, end: 8, zeroPad: 4, prefix: 'walk/', suffix: '.png'})
    // 创建动画
    this.anims.create({key: 'walk', repeat: -1, frames: frameNames, frameRate: 10}) // 每秒回放10帧
    this.capguy.anims.play('walk')
  }
  update (time, delta) {
    // time: 时间
    // delta: 从上次更新开始的增量时间
    this.capguy.x += delta / 8
    if (this.capguy.x > 800) {
      this.capguy.x = -50
    }
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
class Mini extends Phaser.Scene {
    constructor() {
        super('mini');
    }
    preload() {
        this.load.image('coin', 'assets/coin.png');
    }
    path1(obj){
        this.target1 = new Phaser.Math.Vector2();
            this.target1.x = 1532
            this.target1.y = 800
        this.physics.moveToObject(obj,this.target1,600);
    }
    path2(obj){
        this.target2 = new Phaser.Math.Vector2();
            this.target2.x = 429
            this.target2.y = 850
        this.physics.moveToObject(obj,this.target2,300);
    }
    path3(obj){
        this.target3 = new Phaser.Math.Vector2();
            this.target3.x = 710
            this.target3.y = 1500
        this.physics.moveToObject(obj,this.target3,450);
    }
    create(){
        this.pointcount = this.add.text(0,0)
            .setStyle({ fontSize: 200, color: '#fff' })
        this.points = 0;
        this.cameras.main.setBackgroundColor('#444');
        this.coin1 = this.physics.add.image(400,200,"coin")
            .setInteractive({useHandCursor:true})
            .setScale(0.1)
            .setBounce(1, 1)
            .setCollideWorldBounds(true)
            .on('pointerdown', () => {
                this.tweens.add({
                    targets: this.coin1,
                    y: `-=${2 * this.s}`,
                    alpha: { from: 1, to: 0 },
                    duration: 500,
                    onComplete: () => this.coin1.destroy()
                })
                this.points++;
            })
        this.coin2 = this.physics.add.image(1200,0,"coin")
            .setInteractive({useHandCursor:true})
            .setScale(0.25)
            .setBounce(1, 1)
            .setCollideWorldBounds(true)
            .on('pointerdown', () => {
                this.tweens.add({
                    targets: this.coin2,
                    y: `-=${2 * this.s}`,
                    alpha: { from: 1, to: 0 },
                    duration: 500,
                    onComplete: () => this.coin2.destroy()
                })
                this.points++;
            })
        this.coin3 = this.physics.add.image(740,200,"coin")
            .setInteractive({useHandCursor:true})
            .setScale(0.5)
            .setBounce(1, 1)
            .setCollideWorldBounds(true)
            .on('pointerdown', () => {
                this.tweens.add({
                    targets: this.coin3,
                    y: `-=${2 * this.s}`,
                    alpha: { from: 1, to: 0 },
                    duration: 500,
                    onComplete: () => this.coin3.destroy()
                })
                this.points++;
            })
        this.coin4 = this.physics.add.image(1919,1080,"coin")
            .setInteractive({useHandCursor:true})
            .setScale(0.125)
            .setBounce(1, 1)
            .setCollideWorldBounds(true)
            .on('pointerdown', () => {
                this.tweens.add({
                    targets: this.coin4,
                    y: `-=${2 * this.s}`,
                    alpha: { from: 1, to: 0 },
                    duration: 500,
                    onComplete: () => this.coin4.destroy()
                })
                this.points++;
            })
        this.coin5 = this.physics.add.image(2,392,"coin")
            .setInteractive({useHandCursor:true})
            .setScale(0.4)
            .setBounce(1, 1)
            .setCollideWorldBounds(true)
            .on('pointerdown', () => {
                this.tweens.add({
                    targets: this.coin5,
                    y: `-=${2 * this.s}`,
                    alpha: { from: 1, to: 0 },
                    duration: 500,
                    onComplete: () => this.coin5.destroy()
                })
                this.points++;
            })
        this.coin6 = this.physics.add.image(233,1000,"coin")
            .setInteractive({useHandCursor:true})
            .setScale(0.34)
            .setBounce(1, 1)
            .setCollideWorldBounds(true)
            .on('pointerdown', () => {
                this.tweens.add({
                    targets: this.coin6,
                    y: `-=${2 * this.s}`,
                    alpha: { from: 1, to: 0 },
                    duration: 500,
                    onComplete: () => this.coin6.destroy()
                })
                this.points++;
            })
        this.coin7 = this.physics.add.image(700,230,"coin")
            .setInteractive({useHandCursor:true})
            .setScale(0.6)
            .setBounce(1, 1)
            .setCollideWorldBounds(true)
            .on('pointerdown', () => {
                this.tweens.add({
                    targets: this.coin7,
                    y: `-=${2 * this.s}`,
                    alpha: { from: 1, to: 0 },
                    duration: 500,
                    onComplete: () => this.coin7.destroy()
                })
                this.points++;
            })
        this.coin8 = this.physics.add.image(1293,230,"coin")
            .setInteractive({useHandCursor:true})
            .setScale(0.43)
            .setBounce(1, 1)
            .setCollideWorldBounds(true)
            .on('pointerdown', () => {
                this.tweens.add({
                    targets: this.coin8,
                    y: `-=${2 * this.s}`,
                    alpha: { from: 1, to: 0 },
                    duration: 500,
                    onComplete: () => this.coin8.destroy()
                })
                this.points++;
            })
        this.coin9 = this.physics.add.image(700,900,"coin")
            .setInteractive({useHandCursor:true})
            .setScale(0.32)
            .setBounce(1, 1)
            .setCollideWorldBounds(true)
            .on('pointerdown', () => {
                this.tweens.add({
                    targets: this.coin9,
                    y: `-=${2 * this.s}`,
                    alpha: { from: 1, to: 0 },
                    duration: 500,
                    onComplete: () => this.coin9.destroy()
                })
                this.points++;
            })
        this.coin10 = this.physics.add.image(1283,504,"coin")
            .setInteractive({useHandCursor:true})
            .setScale(0.23)
            .setBounce(1, 1)
            .setCollideWorldBounds(true)
            .on('pointerdown', () => {
                this.tweens.add({
                    targets: this.coin10,
                    y: `-=${2 * this.s}`,
                    alpha: { from: 1, to: 0 },
                    duration: 500,
                    onComplete: () => this.coin10.destroy()
                })
                this.points++;
            })
        this.path1(this.coin1);
        this.path2(this.coin3);
        this.path3(this.coin2);
        this.path1(this.coin4);
        this.path2(this.coin5);
        this.path3(this.coin6);
        this.path1(this.coin7);
        this.path1(this.coin8);
        this.path2(this.coin9);
        this.path2(this.coin10);
    }
    update(){
        this.pointcount.setText(this.points);
    }
}

//Click at the right time game
const game = new Phaser.Game({
    scale: {
        mode: Phaser.Scale.FIT,
        autoCenter: Phaser.Scale.CENTER_BOTH,
        width: 1920,
        height: 1080
    },
    scene: [Mini],
    title: "Minigamee",
    physics: {
        default: 'arcade',
        arcade: {
            debug: false
        }
    }
});
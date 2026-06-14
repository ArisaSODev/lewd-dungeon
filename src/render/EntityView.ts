import Entity from "../entities/Entity";

class EntityView {
    sprite: Phaser.GameObjects.Sprite;
    entity: Entity;

    constructor(scene: Phaser.Scene, entity: Entity) {
        this.entity = entity;
        this.sprite = scene.add.sprite(0, 0, entity.asset);
    }

    sync() {
        this.sprite.x = this.entity.Col * 64;
        this.sprite.y = this.entity.Row * 64;
    }
}
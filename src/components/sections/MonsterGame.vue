<template>
    <div>
        <section class="row col-sm-12">
            <div class="col-sm-6">
                <h1>YOU</h1>
                <div class="healthbar">
                    <div class="healthbar text-center"
                         style="background-color: green; margin: 0; color: white;"
                         :style="{width: playerHealth + '%' }">
                        {{ playerHealth }}
                    </div>
                </div>
            </div>
            <div class="col-sm-6">
                <h1>MONSTER</h1>
                <div class="healthbar">
                    <div class="healthbar text-center"
                         style="background-color: green; margin: 0; color: white;"
                         :style="{width: monsterHealth + '%' }">
                        {{ monsterHealth }}
                    </div>
                </div>
            </div>
        </section>
        <section class="row controls col-sm-offset-1 col-sm-10" v-if="!gameIsRunning">
            <button id="start-game" @click="startGame">START NEW GAME</button>
        </section>
        <section class="row controls col-sm-offset-1 col-sm-10" v-else>
            <button id="attack" @click="attack">ATTACK</button>
            <button id="special-attack" @click="spAttack">SPECIAL ATTACK</button>
            <button id="heal" @click="heal">HEAL</button>
            <button id="give-up" @click="giveUp">GIVE UP</button>
        </section>
        <section class="row log" v-if="turns.lenght > 0">
            <ul>
                <li v-for="turn in turns">
                    {{ turn.text }}
                </li>
            </ul>
        </section>
    </div>
</template>

<script>
    export default {
        data () {
            return {
                playerHealth: 100,
                monsterHealth: 100,
                gameIsRunning: false,
                turns: [

                ]
            }
        },
        methods: {
            startGame: function () {
                this.gameIsRunning = true;
                this.playerHealth = 100;
                this.monsterHealth = 100;
                this.turns = [];
            },
            attack: function () {
                var damage = this.calculateDamage(3,10);
                this.monsterHealth -= damage;
                this.turns.unshift({
                    isPlayer: true,
                    text: 'Player hits Monster for ' +  damage
                });
                if (this.checkWin()) {
                    return;
                }

                this.monsterAttacks();
            },
            spAttack: function () {
                var damage = this.calculateDamage(10,10);
                this.monsterHealth -= damage;
                this.turns.unshift({
                    isPlayer: true,
                    text: 'Player hits Monster hard for ' +  damage
                });
                if (this.checkWin()) {
                    return;
                }

                this.monsterAttacks();
            },
            heal: function () {
                if (this.playerHealth <= 90) {
                    this.playerHealth += 10
                } else {
                    this.playerHealth = 100;
                }
                this.turns.unshift({
                    isPlayer: true,
                    text: 'Player heals for 10'
                });
                this.monsterAttacks();
            },
            giveUp: function () {
                this.gameIsRunning = false;
            },
            monsterAttacks: function () {
                var damage = this.calculateDamage(5,12);
                this.playerHealth -= damage;
                this.checkWin();
                this.turns.unshift({
                    isPlayer: false,
                    text: 'Monster hits Player for ' +  damage
                });
            },
            calculateDamage: function (min, max) {
                return Math.max(Math.floor(Math.random() = max) + 1, min);
            },
            checkWin: function () {
                if (this.monsterHealth <= 0) {
                    if (confirm('You won! New Game?')) {
                        this.startGame();
                    } else {
                        this.gameIsRunning = false;
                    }
                    return true;
                } else if (this.playerHealth <= 0) {
                    if (confirm('You lost! New Game?')) {
                        this.startGame();
                    } else {
                        this.gameIsRunning = false;
                    }
                    return true;
                }
                return false;
            }

        }
    }
</script>
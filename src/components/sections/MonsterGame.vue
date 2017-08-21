<template>
    <div>
        <section class="row">
            <div class="col-sm-6">
                <h1>YOU</h1>
                <div class="healthbar">
                    <div class="healthbar text-center" style="background-color: green; margin: 0; color: white;">
                        {{ playerHealth }}
                    </div>
                </div>
            </div>
            <div class="col-sm-6">
                <h1>MONSTER</h1>
                <div class="healthbar">
                    <div class="healthbar text-center" style="background-color: green; margin: 0; color: white;">
                        {{ monsterHealth }}
                    </div>
                </div>
            </div>
        </section>
        <section class="row controls">
            <button id="start-game">START NEW GAME</button>
        </section>
        <section class="row controls">
            <button id="attack">ATTACK</button>
            <button id="special-attack">SPECIAL ATTACK</button>
            <button id="heal">HEAL</button>
            <button id="give-up">GIVE UP</button>
        </section>
        <section class="row log">
            <ul>
                <li></li>
            </ul>
        </section>
    </div>
</template>

<script>
    export default {
        data () {
            playerHealth: 100,
            monsterHealth: 100,
            gameIsRunning: 100,
        }
    }
</script>
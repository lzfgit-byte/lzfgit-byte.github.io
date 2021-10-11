var nes;
$(function() {
    nes = new JSNES({
        emulateSound:true,
        'ui': $('#emulator').JSNESUI({
            "魂斗罗": [
                ['魂斗罗1(U)30', 'roms/Contra/Contra1(U)30.nes'],
                ['魂斗罗1(U)30F', 'roms/Contra/Contra1(U)30F.nes'],
                ['魂斗罗1(U)30L', 'roms/Contra/Contra1(U)30L.nes'],
                ['魂斗罗1(U)30M', 'roms/Contra/Contra1(U)30M.nes'],
                ['魂斗罗1(U)30S', 'roms/Contra/Contra1(U)30S.nes'],
                ['魂斗罗1(U)F', 'roms/Contra/Contra1(U)F.nes'],
                ['魂斗罗1(U)L', 'roms/Contra/Contra1(U)L.nes'],
                ['魂斗罗1(U)M', 'roms/Contra/Contra1(U)M.nes'],
                ['魂斗罗1(U)S', 'roms/Contra/Contra1(U)S.nes'],
            ],
            "超级玛丽": [
                ['超级马里奥1 (W) Super Mario Bros. [!]', 'roms/rom1/(W) Super Mario Bros. [!].nes'],
                ['超级马里奥2 (W) Super Mario Bros. 3 (U)', 'roms/bfirsh/Super Mario Bros. 3 (U) (PRG1) [!].nes'],
                ['马里奥拆屋工 (W) Wrecking Crew [!]', 'roms/rom1/(W) Wrecking Crew [!].nes'],
                ['马里奥医生 Dr. Mario (JU)', 'roms/bfirsh/Dr. Mario (JU).nes'],
            ],
            "双截龙": [
                ['双截龙1 Double Dragon1', 'roms/Double Dragon/Double Dragon1.nes'],
                ['双截龙2 Double Dragon2', 'roms/Double Dragon/Double Dragon2.nes'],
                ['双截龙3 Double Dragon3', 'roms/Double Dragon/Double Dragon3.nes'],
                ['双截龙4 Double Dragon4', 'roms/Double Dragon/Double Dragon4.nes'],
            ],
            "坦克": [
                ['坦克 (Ch) Missile Tank', 'roms/rom1/(Ch) Missile Tank.nes'],
                ['坦克 (Ch) Tank 1990', 'roms/rom1/(Ch) Tank 1990.nes'],
                ['坦克 (J) Battle City', 'roms/rom1/(J) Battle City.nes'],
            ],
            "经典": [
                ['赤影战士 Kage', 'roms/other/Kage.nes'],
                ['中国象棋', 'roms/other/Zhong Guo Xiang Qi.nes'],
                ['吃豆精灵 (J) (V1.1) Pac-Man [!]', 'roms/other/Pac-Man.nes'],
                ['摩托车大赛 (J) (PRG1) Mach Rider [!]', 'roms/other/Mach Rider.nes'],
                ['沙罗曼蛇 (U) Life Force', 'roms/rom2/Life Force [!].nes'],
                ['1943 (U) 1943 - The Battle of Midway', 'roms/rom2/1943.nes'],
                ['脱狱 Cross Fire (J)', 'roms/rom2/Cross Fire (J).nes'],
                ['撞球咖啡馆 Shufflepuck Cafe', 'roms/rom2/Shufflepuck Cafe.nes'],
                ['功夫 (J) (V1.2) Yie Ar Kung-Fu [!]', 'roms/rom1/(J) (V1.2) Yie Ar Kung-Fu [!].nes'],
            ],
            "淘金者": [
                ['淘金者(汉化)', 'roms/rom1/TaoJinZhe.nes'],
                ['淘金者(J)', 'roms/rom1/Championship Lode Runner (J).nes'],
            ],
            "俄罗斯方块": [
                ['俄罗斯方块LJ65', 'roms/lj65/lj65.nes'],
                ['俄罗斯方块Tetris(U)', 'roms/other/Tetris (U) [!].nes'],
                ['俄罗斯方块Tetris 2(U)', 'roms/other/Tetris 2 (U) [!].nes'],
            ],
            "赛车": [
                ['F1赛车 (J) F-1 Race [!]', 'roms/rom1/(J) F-1 Race [!].nes'],
                ['摩托车大赛 (JU) (PRG0) Mach Rider [!]', 'roms/rom1/(JU) (PRG0) Mach Rider [!].nes'],
                ['越野机车 (JU) Excitebike [!]', 'roms/rom1/(JU) Excitebike [!].nes'],
                ['火箭车 (J) Road Fighter [!]', 'roms/rom1/(J) Road Fighter [!].nes'],
            ],
            "1981": [
                ['五子棋 (5) 日版', 'roms/1981/5.nes'],
            ],
            "其它": [
                ['泡泡 Bubble Bobble (U)', 'roms/bfirsh/Bubble Bobble (U).nes'],
                ['Concentration Room', 'roms/croom/croom.nes'],
                ['网球Tennis(JU)', 'roms/other/Tennis (JU) [!].nes'],
                ['高尔夫 Golf (JU)', 'roms/bfirsh/Golf (JU).nes'],
                ['Zelda II - The Adventure of Link(U)', 'roms/other/Zelda II - The Adventure of Link (U).nes'],
                ['地底探险1 (J) Spelunker [!]', 'roms/rom1/(J) Spelunker [!].nes'],
                ['快乐猫 (J) Mappy [!]', 'roms/rom1/(J) Mappy [!].nes'],
                ['成龙踢馆1 (J) Spartan X [!]', 'roms/rom1/(J) Spartan X [!].nes'],
                ['敲冰块 (J) Ice Climber', 'roms/rom1/(J) Ice Climber.nes'],
                ['炸弹人1 (J) Bomberman [!]', 'roms/rom1/(J) Bomberman [!].nes'],
                ['猪小弟 (J) Pooyan', 'roms/rom1/(J) Pooyan.nes'],
                ['马戏团 (J) Circus Charlie [!]', 'roms/rom1/(J) Circus Charlie [!].nes'],
            ],
        })
    });
});
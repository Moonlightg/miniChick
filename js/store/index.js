const store = new Vuex.Store({
    state: {
        user: {
          firstGame: 0, // 
          name: '养鸡大户006',
          money: 3000,
          achievementNum: 0, // 获得成就总数
        },
        // 物品，收获物品
        goods: [],
        // 小鸡信息
        chick: {
          exp: 0,         // 经验值
          upgradeExp: 100,// 升级所需经验
          level: 1,       // 等级
          eat: false,     // 是否在进食
          setTime: 300,   // 喂食时长 300s
          currentSuit: 'default', // 当前套装
          currentHat: 'default',    // 当前帽子
          currentClothes: 'default',  // 当前衣服
          componentHat: 'hat-default', // 默认帽子组件
          componentClothes: 'clothes-default', // 默认衣服组件
          // 鸡蛋
          egg: {
            num: 0,       // 鸡蛋待拾取数量
            allNum: 0,    // 库存鸡蛋总量
            progress: 0, // 鸡蛋进度条
            price: 2500,  // 鸡蛋价格
            eggBase: 50,  // 鸡蛋生成基数值：鸡蛋个数*基数 = 生成鸡蛋增加的数值
            addEggExps: 0 // 每次增加的鸡蛋经验
          }
        },
        // 食物信息
        foods: [{
          id: 1,
          name: '小麦',    // 食物名称
          price: 10,      // 单价
          eatTime: 5000,  // 进食时间 (单位毫秒)
          exp: 100,       // 增加小鸡经验
          num: 2,         // 库存数量
          unlock: 1,      // 0为待解锁，1为已解锁
          unlockPrice: 1, // 解锁金额
          url: 'images/food1.png' // 图片
        },{
          id: 2,
          name: '三叶草',
          price: 100,
          eatTime: 10000,
          exp: 600,
          num: 0,
          unlock: 0,
          unlockPrice: 100,
          url: 'images/food2.png'
        },{
          id: 3,
          name: '橄榄',
          price: 150,
          eatTime: 120000,
          exp: 800,
          num: 0,
          unlock: 0,
          unlockPrice: 500,
          url: 'images/food3.png'
        },{
          id: 4,
          name: '面包',
          price: 450,
          eatTime: 160000,
          exp: 1000,
          num: 0,
          unlock: 0,
          unlockPrice: 1000,
          url: 'images/food4.png'
        },{
          id: 5,
          name: '葡萄',
          price: 650,
          eatTime: 170000,
          exp: 1100,
          num: 0,
          unlock: 0,
          unlockPrice: 1300,
          url: 'images/food5.png'
        },{
          id: 6,
          name: '豆腐',
          price: 750,
          eatTime: 180000,
          exp: 1200,
          num: 0,
          unlock: 0,
          unlockPrice: 1500,
          url: 'images/food6.png'
        },{
          id: 7,
          name: '大包菜',
          price: 750,
          eatTime: 180000,
          exp: 1200,
          num: 0,
          unlock: 0,
          unlockPrice: 1500,
          url: 'images/food7.png'
        }],
        // 勋章列表
        achievement: [{
          id: 1,
          title: '投喂如此简单',    // 勋章名称
          desc: '投喂1次小鸡',      // 描述
          profit: '奖励金币500',    // 奖励
          complete: false,          // 是否完成
          completeTypeId: 1,        // 成就类别，1=投喂次数；2=获得金币数；3=解锁粮食数
          completeCurrCount: 0,     // 当前已完成数量 - 进度
          completeNeedCount: 1,     // 满足条件的数量
          oncomplete(state, achievement) {
            console.log('获得成就'+achievement.title);
            state.user.money += 500;
            state.user.achievementNum++;
          }
        },{
          id: 2,
          title: '再次投喂了呀',    // 勋章名称
          desc: '投喂2次小鸡',      // 描述
          profit: '奖励金币1000',    // 奖励
          complete: false,          // 是否完成
          completeTypeId: 1,        // 成就类别，1=投喂次数；2=获得金币数；3=解锁粮食数
          completeCurrCount: 0,     // 当前已完成数量 - 进度
          completeNeedCount: 2,     // 满足条件的数量
          oncomplete(state, achievement) {
            console.log('获得成就'+achievement.title);
            state.user.money += 1000;
            state.user.achievementNum++;
          }
        }],
        startDate: '',    // 开始时间
        endDate: '',      // 结束时间
        content: '',      // 倒计时
        currFood: {},     // 当前选中的食物
        currGood: {},     // 当前收获的物品
        modalLevel: false,
        // 进度条
        value: 0
    },
    mutations: {
        // 首次游戏改变状态
        startGame (state,pid) {
          state.user.firstGame = pid;
          this.commit('save');
          //this.commit('load');
        },
        // 判断是否正在进食
        CHICK_IS_EAT (state) {
          state.enddate = '';
          state.chick.eat = false;
          this.commit('SAVE_GAME');
          state.content = '大佬，肚饥咧！';
        },
        FEED_CLICK (state,endDate) {
            // 得到选中的食物
            // state.foods.forEach(obj => {
            //   if (obj.name === r) {
            //     state.currFood = obj
            //   }
            // // })
            // let startDate = new Date().getTime();
            // let endDate = startDate + state.currFood.eatTime;
            //state.startDate = startDate;
            state.endDate = endDate;
            state.currFood.num--;  // 扣除食物数量
            state.chick.eat = true;
            this.commit('checkAchievemnt', 1);
            this.commit('SAVE_GAME');
            
        },
        shopFood (state,name) {
          // 得到需要购买的食物
          state.foods.forEach(obj => {
            if (obj.name === name) {
              state.currFood = obj
            }
          });

        },
        SHOW_GOOD (state,name) {
          // 得到查看的物品
          state.goods.forEach(obj => {
            if (obj.name === name) {
              state.currGood = obj
            }
          });
        },
        SELL_GOOD (state,num) {
          state.user.money += state.currGood.price * num;
          state.currGood.num = state.currGood.num - num;
          console.log(state.user.money);
          console.log(state.currGood.num);
          if (state.currGood.num == 0) {
            // 出售完后删除
            state.goods.forEach((obj,index) => {
              if (obj.name === state.currGood.name) {
                state.goods.splice(state.goods.indexOf(index),1);
              }
            });
          }
        },
        UNLOCK_FOOD (state,price) {
          state.currFood.unlock = 1;
          state.user.money = state.user.money - price;
        },
        SHOP_SETTLE (state,num) {
          state.currFood.num = num;
          state.user.money = state.user.money - state.currFood.price * num;
          console.log("购买了"+num+"个"+state.currFood.name);
        },
        // 进食结束
        END_EAT (state) {
            state.enddate = '';    // 倒计时结束清零结束时间
            state.chick.eat = false;     // 进食状态设为false
            // 结束结算
            this.commit('settleExp');
            this.commit('SAVE_GAME');          // 存档
            state.content = '喂食结束';
            setTimeout (function() {
              state.content = '阴公，好嗨饿！';
            },2000)
        },
        endEat (state) {
            state.enddate = '';    // 倒计时结束清零结束时间
            state.chick.eat = false;     // 进食状态设为false
            // 结束结算
            this.commit('settleExp');
            this.commit('SAVE_GAME');          // 存档
            state.content = '喂食结束';
            setTimeout (function() {
              state.content = '阴公，好嗨饿！';
            },2000)
        },
        // 结束结算
        settleExp (state) {
            state.chick.egg.addEggExps = parseInt(state.currFood.exp/state.chick.egg.eggBase);// 鸡蛋加成 = 食物经验/基数，取整数
            let eggExps = state.chick.egg.progress += state.chick.egg.addEggExps;
            console.log("鸡蛋进度条增加后："+eggExps);
            let exps = state.chick.exp + state.currFood.exp;
            console.log("小鸡经验增加后为："+exps);
            this.commit('SETTLE_LEVEL', exps);
            this.commit('settleEgg', eggExps);
        },
        // 生成鸡蛋个数计算
        settleEgg (state,eggExps) {
            if (eggExps > 100) {
              console.log("eggExps:"+eggExps);
              let eggNum = parseInt(eggExps/100);
              state.chick.egg.num += eggNum;
              console.log("生成的鸡蛋数："+state.chick.egg.num);
              state.chick.egg.progress = eggExps - eggNum * 100;
              console.log("剩余的鸡蛋经验值："+state.chick.egg.progress);
            }
        },
        // 升级计算
        SETTLE_LEVEL (state, exps) {
            let self = this;
            // 判断是否需要升级
            if (exps >= state.chick.upgradeExp) {
              state.chick.level += 1;
              state.chick.exp = exps - state.chick.upgradeExp;
              state.chick.upgradeExp = parseInt(state.chick.upgradeExp * 2);
              state.modalLevel = true;
              this.commit('SAVE_GAME'); 
            }
        },
        // 收获物品
        HARVEST_EGG (state,good) {
          console.log(good);
          // 得到收取的物品
          if (state.goods.length == 0) {
            console.log(state.goods);
            state.goods.push(good);
            state.chick.egg.num = 0;
          } else {
            state.goods.forEach(obj => {
              if (obj.name === good.name) {
                state.currGood = obj;
                state.currGood.num += good.num;
                console.log("收获物品"+state.currGood.name+"一共"+good.num+"个");
                state.chick.egg.num = 0;
              }
            })
          }
        },
        // 设置服装
        REPLACE_DRESS (state,price) {
          if (price.type == 0) {
            state.chick.currentSuit = price.pid;
            state.chick.currentClothes = price.pid;
            state.chick.currentHat = price.pid;
            state.chick.componentHat = 'hat-' + price.pid;
            state.chick.componentClothes = 'clothes-' + price.pid;
          } else if (price.type == 1) {
            state.chick.currentHat = price.pid;
            state.chick.componentHat = 'hat-' + price.pid;
          } else {
            state.chick.currentClothes = price.pid;
            state.chick.componentClothes = 'clothes-' + price.pid;
          }
        },
        // 获得成就方法
        checkAchievemnt(state, id) {
          // 寻找目标一致且未完成的成就
          let targetList = state.achievement.filter(obj => obj.completeTypeId === id && !obj.complete);
          console.log(targetList);
          // 寻找目标植物
          //let targetPlant = state.plants.find(obj => obj.id === id);
          // 执行目标的奖励方式
          targetList.forEach(obj => {
            if (obj.completeCurrCount <= obj.completeNeedCount) {
              obj.completeCurrCount += 1;
              if (obj.completeCurrCount >= obj.completeNeedCount) {
                obj.complete = true;
                if (typeof obj.oncomplete === 'function') {
                  obj.oncomplete(state, obj);
                }
              }
            }
          })
        },
        // 存档
        SAVE_GAME (state) {
            let achievement = state.achievement.map(obj => {
              return {
                id: obj.id,
                count: obj.completeCurrCount,
                complete: obj.complete
              }
            });
            let data = {
              achievement,
              endDate: state.endDate,
              currFood: state.currFood,
              currGood: state.currGood,
              chick: state.chick,
              user: state.user,
              foods: state.foods,
              goods: state.goods
            };
            localStorage.setItem('farmDate', JSON.stringify(data))
        },
          // 读档
        LOAD_GAME (state) {
            let data = JSON.parse(localStorage.getItem('farmDate'))
            if (!data) return
            state.achievement.forEach(oldAchievement => {
              data.achievement.forEach(newAchievement => {
                if (oldAchievement.id === newAchievement.id) {
                  oldAchievement.completeCurrCount = newAchievement.count;
                  oldAchievement.complete = newAchievement.complete;
                }
              });
            });
            state.endDate = data.endDate,
            state.currFood = data.currFood,
            state.currGood = data.currGood,
            state.chick = data.chick,
            state.user = data.user,
            state.foods = data.foods,
            state.goods = data.goods
        }
    },
    actions: {
      // 保存修改用户信息
      keepuser (context) {
        context.commit('SAVE_GAME');
      },
      endeat (context) {
        context.commit('END_EAT');
      },
      // 升级经验计算
      settlelevel (context,value) {
        context.commit('SETTLE_LEVEL',value);
      },
      // 收获物品
      harvestegg (context,value) {
        context.commit('HARVEST_EGG',value);
        context.commit('SAVE_GAME');
      },
      // 查看物品详情
      shopGood (context,value) {
        context.commit('SHOW_GOOD',value);
      },
      // 出售物品
      sellgood (context,value) {
        context.commit('SELL_GOOD',value);
        context.commit('SAVE_GAME');
      },
      // 设置服装
      replacedress (context,value) {
        context.commit("REPLACE_DRESS",value);
        context.commit('SAVE_GAME');
      },
      // 购买商品
      shopsettle (context,value) {
        context.commit("SHOP_SETTLE",value);
        context.commit('SAVE_GAME');
      },
      // 解锁商品
      unlockfood (context,value) {
        context.commit("UNLOCK_FOOD",value);
        context.commit('SAVE_GAME');
      },
      // 读档
      loadgame (context) {
        context.commit('LOAD_GAME');
      },
      // 存档
      savegame (context) {
        context.commit('SAVE_GAME');
      }
    }
})
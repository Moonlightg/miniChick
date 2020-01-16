var achievements = [{
  id: 1,
  title: '投喂如此简单',    // 勋章名称
  desc: '投喂1次小鸡',      // 描述
  profit: '500',    // 奖励
  complete: false,          // 是否完成
  completeID: 0,            // 未完成0，已完成1
  completeTypeId: 1,        // 成就类别，1=投喂次数；2=获得金币数；3=解锁粮食数
  completeCurrCount: 0,     // 当前已完成数量 - 进度
  completeNeedCount: 1,     // 满足条件的数量
  oncomplete(state, achievement) {
    popUp('解锁成就',achievement.title);
  }
},{
  id: 2,
  title: '再次投喂了呀',    // 勋章名称
  desc: '投喂2次小鸡',      // 描述
  profit: '1000',    // 奖励
  complete: false,          // 是否完成
  completeID: 0, 
  completeTypeId: 1,        // 成就类别，1=投喂次数；2=获得金币数；3=解锁粮食数
  completeCurrCount: 0,     // 当前已完成数量 - 进度
  completeNeedCount: 2,     // 满足条件的数量
  oncomplete(state, achievement) {
    popUp('解锁成就',achievement.title);
  }
}]
export const BaseConfig = {
  logo: 'https://mdn.alipayobjects.com/huamei_xgb3qj/afts/img/A*cu5IRZmkUAMAAAAAAAAAAAAADtmcAQ/original',
  favicon: [
    'https://mdn.alipayobjects.com/huamei_xgb3qj/afts/img/A*JiTDRaNWTQkAAAAAAAAAAAAADtmcAQ/original',
  ],
  metas: [
    {
      name: 'keywords',
      content: 'ACE, All-scale Causal Engine, 大规模因果学习系统',
    },
    {
      name: 'description',
      content: 'ACE(All-scale Causal Engine)大规模因果学习系统',
    },
  ],
  footer: '© 版权所有 2022 Ant Group Co., Ltd. 京ICP备15032932号-38',
};

export default {
  // 标识
  PRIMARY_KEY: 'ACE',
  // 标题
  PRIMARY_TITLE: {
    zh: '大规模因果学习系统',
    en: 'All-scale Causal Engine',
  },
  // 描述
  PRIMARY_DESCRIPTION: {
    zh: 'All-scale Causal Engine',
    en: 'All-scale Causal Engine',
  },
  // GITHUB
  GITHUB: 'GitHub',
  // GITHUB URL
  GITHUB_URL: 'https://github.com/Open-All-Scale-Causal-Engine/OpenASCE',
  // 帮助文档链接
  HELP_URL: '',
  // 帮助文档
  HELP_DOCUMENT: { zh: '帮助文档', en: 'Document' },
  // 公告信息
  ANNOUNCEMENT_INFO_DATA: [],
  // 技术特性
  TECHNICAL_FEATURES_TITLE: { zh: '技术特性', en: 'Technical Features' },
  TECHNICAL_FEATURES_STYLE: {
    minCardWidth: 100,
  },
  TECHNICAL_FEATURES_DATA: [
    {
      title: {
        zh: '高性能',
        en: 'High Performance',
      },
      description: {
        zh: '因果纠偏树1亿样本4小时完成训练，是业界唯一的分布式boosting因果树实现',
        en: 'Causal correction tree completes training of 100 million samples in 4 hours, the only distributed boosting causal tree implementation in the industry',
      },
      imgUrl:
        'https://mdn.alipayobjects.com/huamei_xgb3qj/afts/img/A*Pk9-QafGjgMAAAAAAAAAAAAADtmcAQ/original',
      imgStyle: {
        maxWidth: '8rem',
        maxHeight: '8rem',
      },
    },
    {
      title: {
        zh: '易用',
        en: 'Easy to Use',
      },
      description: {
        zh: '5+端到端解决方案',
        en: 'End-to-end solutions for 5+ scenarios.',
      },
      imgUrl:
        'https://mdn.alipayobjects.com/huamei_xgb3qj/afts/img/A*qAvdQoWBKX8AAAAAAAAAAAAADtmcAQ/original',
      imgStyle: {
        maxWidth: '8rem',
        maxHeight: '8rem',
      },
    },
    {
      title: {
        zh: '算法丰富',
        en: 'Rich Algorithms',
      },
      description: {
        zh: '包含20+工业级算法，其中10+因果表征学习算法，6+自研算法',
        en: 'Includes 20+ industrial-grade algorithms, including 10+ causal representation learning algorithms and 6+ self-developed algorithms',
      },
      imgUrl:
        'https://mdn.alipayobjects.com/huamei_xgb3qj/afts/img/A*PheCT7fLUwsAAAAAAAAAAAAADtmcAQ/original',
      imgStyle: {
        maxWidth: '8rem',
        maxHeight: '8rem',
      },
    },
    {
      title: {
        zh: '全链路',
        en: 'End-to-End',
      },
      description: {
        zh: '包含因果发现、因果效应估计、归因全链路因果学习能力',
        en: 'Includes causal discovery, causal effect estimation, and attribution end-to-end causal learning capabilities',
      },
      imgUrl:
        'https://mdn.alipayobjects.com/huamei_xgb3qj/afts/img/A*i1HwQKSMFo0AAAAAAAAAAAAADtmcAQ/original',
      imgStyle: {
        maxWidth: '8rem',
        maxHeight: '8rem',
      },
    },
    {
      title: {
        zh: '扩展性强',
        en: 'Strong Scalability',
      },
      description: {
        zh: '支持 Tensorflow/Pytorch作为计算引擎，提供丰富的因果学习接口支持',
        en: 'Supports Tensorflow/Pytorch as the computing engine, provides rich causal learning interface support',
      },
      imgUrl:
        'https://mdn.alipayobjects.com/huamei_xgb3qj/afts/img/A*kKciS5ldXGIAAAAAAAAAAAAADtmcAQ/original',
      imgStyle: {
        maxWidth: '8rem',
        maxHeight: '8rem',
      },
    },
    {
      title: {
        zh: '大规模',
        en: 'Large Scale',
      },
      description: {
        zh: '因果发现支持百万特征千万样本',
        en: 'Causal discovery supports millions of features and tens of millions of samples',
      },
      imgUrl:
        'https://mdn.alipayobjects.com/huamei_xgb3qj/afts/img/A*_cbTQKqJ5LMAAAAAAAAAAAAADtmcAQ/original',
      imgStyle: {
        maxWidth: '8rem',
        maxHeight: '8rem',
      },
    },
  ],
  // 业务应用
  BUSINESS_APPLICATION_TITLE: { zh: '业务应用', en: 'Business Applications' },
  BUSINESS_APPLICATION_DATA: [
    {
      title: {
        zh: '信贷风控响应建模',
        en: 'Credit Risk Response',
      },
      imgUrl: {
        zh: 'https://mdn.alipayobjects.com/huamei_xgb3qj/afts/img/A*OpuKSKxPjA8AAAAAAAAAAAAADtmcAQ/original',
        en: 'https://mdn.alipayobjects.com/huamei_xgb3qj/afts/img/A*BDGhRq99cQEAAAAAAAAAAAAADtmcAQ/original',
      },
      children: [
        {
          title: {
            zh: '面向金融智能决策的因果效应估计',
            en: 'Causal Effects Estimation for Financial Intelligent Decision Making',
          },
          children: [
            {
              zh: '准确预估正负向干预手段对余额和风险的影响，支撑后续的决策优化',
              en: 'Accurately estimate the impact of positive and negative intervention measures on balance and risk, supporting subsequent decision optimization',
            },
            {
              zh: '运用丰富的因果推断技术来纠正历史数据中由于策略干预带来的偏置',
              en: 'Apply rich causal inference techniques to correct biases in historical data caused by policy interventions',
            },
            {
              zh: '通过单调性约束等方式来结合专家先验与数据驱动的机器学习建模',
              en: 'Combine expert priors and data-driven machine learning modeling through constraints such as monotonicity',
            },
          ],
        },

        {
          title: {
            zh: '显式纠偏得出更准确更鲁棒的风险预估',
            en: 'Explicit De-biasing for More Accurate and Robust Risk Estimation',
          },
          children: [
            {
              zh: '利用干预前的时序数据辅助纠偏，显式降低选择偏差',
              en: 'Utilize pre-intervention time-series data for assisting de-biasing, explicitly reducing selection bias',
            },
            {
              zh: '缓解未观测混淆因子带来的影响，使风险预估更鲁棒',
              en: 'Mitigate the influence of unobserved confounding factors to make risk estimation more robust',
            },
          ],
        },
        {
          title: {
            zh: '借助少量实验数据进一步纠正数据中的偏置',
            en: 'Further Correcting Biases in Data with a Small Amount of Experimental Data',
          },
          children: [
            {
              zh: '通过反事实数据增广和元学习来调整观测数据的分布',
              en: 'Adjust the distribution of observed data through counterfactual data augmentation and meta-learning',
            },
            {
              zh: '融合无偏估计和有偏估计来得到一个更优的预估结果',
              en: 'Combine unbiased estimates and biased estimates to obtain a better estimation result',
            },
            {
              zh: '结合少量实验数据和大量观察数据得出更准确的风险预估',
              en: 'Combine a small amount of experimental data with a large amount of observational data to derive more accurate risk estimation',
            },
          ],
        },
      ],
    },
    {
      title: {
        zh: '智能营销',
        en: 'Intelligent Marketing',
      },
      imgUrl: {
        zh: 'https://mdn.alipayobjects.com/huamei_xgb3qj/afts/img/A*egIbQJ6xQCkAAAAAAAAAAAAADtmcAQ/original',
        en: 'https://mdn.alipayobjects.com/huamei_xgb3qj/afts/img/A*RkNMS7cpgogAAAAAAAAAAAAADtmcAQ/original',
      },
      children: [
        {
          title: {
            zh: '面向金融智能决策的因果效应估计',
            en: 'Causal Effects Estimation for Financial Intelligent Decision Making',
          },
          children: [
            {
              zh: '准确预估正负向干预手段对余额和风险的影响，支撑后续的决策优化',
              en: 'Accurately estimate the impact of positive and negative intervention measures on balance and risk, supporting subsequent decision optimization',
            },
            {
              zh: '运用丰富的因果推断技术来纠正历史数据中由于策略干预带来的偏置',
              en: 'Apply rich causal inference techniques to correct biases in historical data caused by policy interventions',
            },
            {
              zh: '通过单调性约束等方式来结合专家先验与数据驱动的机器学习建模',
              en: 'Combine expert priors and data-driven machine learning modeling through constraints such as monotonicity',
            },
          ],
        },
        {
          title: {
            zh: '基于因果纠偏的推荐营销',
            en: 'Causal De-biased Recommendation Marketing',
          },
          children: [
            {
              zh: '全空间因果纠偏，有效缓解选择偏差',
              en: 'Causal de-biasing across the entire space, effectively mitigating selection bias',
            },
            {
              zh: '借助后门调整和反事实数据增广，消除混淆因子',
              en: 'Utilize backdoor adjustment and counterfactual data augmentation to eliminate confounding factors',
            },
            {
              zh: '学习更加稳定的因果关系，得到更准确更鲁棒的估计',
              en: 'Learn more stable causal relationships and obtain more accurate and robust estimates',
            },
          ],
        },
        {
          title: {
            zh: '跨域因果效应估计',
            en: 'Cross-domain Causal Effects Estimation',
          },
          children: [
            {
              zh: '融合多个数据源得到更准确的估计',
              en: 'Integrate multiple data sources for more accurate estimates',
            },
            {
              zh: '通过因果纠偏提升模型的分布外泛化能力',
              en: 'Enhance the out-of-distribution generalization ability of the model through causal de-biasing',
            },
          ],
        },
      ],
    },
  ],
  // 合作伙伴
  COOPERATOR_TITLE: {
    zh: '合作伙伴',
    en: 'Cooperators',
  },
  COOPERATOR_DATA: [
    {
      imgUrl: '',
      title: {
        zh: '浙江大学',
        en: 'Zhejiang University',
      },
    },
    {
      imgUrl: '',
      title: {
        zh: '中国科学技术大学',
        en: 'University of Science and Technology of China',
      },
    },
  ],
  // 关于我们
  ABOUT_US_CONFIG: [
    {
      title: {
        zh: '资源',
        en: 'Resources',
      },
      description: {
        zh: 'GitHub',
        en: 'GitHub',
      },
      imgUrl:
        'https://mdn.alipayobjects.com/huamei_xgb3qj/afts/img/A*JRo8Roq8B9EAAAAAAAAAAAAADtmcAQ/original',
      linkUrl: 'https://github.com/Open-All-Scale-Causal-Engine/OpenASCE',
    },
    {
      title: {
        zh: '社区',
        en: 'Community',
      },
      description: {
        zh: '社区地址',
        en: 'Community Link',
      },
      linkUrl: '',
      hidden: true,
    },
    {
      title: {
        zh: '关注我们',
        en: 'Follow us',
      },
      description: {
        zh: '邮箱：feidongni.fdn@antgroup.com',
        en: 'Email: feidongni.fdn@antgroup.com',
      },
      linkUrl: 'mailto:feidongni.fdn@antgroup.com',
    },
  ],
  OR_CODE_CONFIG_TITLE: {
    zh: '暂无群二维码',
    en: 'Coming soon',
  },
  OR_CODE_CONFIG_URL:
    'https://mdn.alipayobjects.com/huamei_xgb3qj/afts/img/A*9BZfR6NtkjYAAAAAAAAAAAAADtmcAQ/original',
};

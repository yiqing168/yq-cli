export let out = {
  "respCode": null,
  "respMsg": null,
  "responseType": "SUCCESS",
  "returnDate": null,
  "returnObject": [
    {
      "nodeId": "371995476586930176",
      "parentNodeId": null,
      "parentNodeName": null,
      "nodeName": "商户",
      "attributes": {
        "tagEn": "b_client_fact",
        "tagCn": "商户",
        "createTime": "2019-09-18 20:38:19:000",
        "parentTag": null,
        "tenantId": "000",
        "tagType": "0",
        "id": "371995476586930176",
        "tagLevel": "1",
        "isLeaf": "0"
      },
      "children": [
        {
          "nodeId": "371996514953994240",
          "parentNodeId": "371995476586930176",
          "parentNodeName": null,
          "nodeName": "企业资质",
          "attributes": {
            "tagEn": "eq_fact",
            "tagCn": "企业资质",
            "createTime": "2019-09-18 20:42:26:000",
            "parentTag": "371995476586930176",
            "tenantId": "000",
            "tagType": "0",
            "id": "371996514953994240",
            "tagLevel": "2",
            "isLeaf": "0"
          },
          "children": [
            {
              "nodeId": "371996810908278784",
              "parentNodeId": "371996514953994240",
              "parentNodeName": null,
              "nodeName": "经营资质",
              "attributes": {
                "tagEn": "bq_fact",
                "tagCn": "经营资质",
                "createTime": "2019-09-18 20:43:37:000",
                "parentTag": "371996514953994240",
                "tenantId": "000",
                "tagType": "0",
                "id": "371996810908278784",
                "tagLevel": "3",
                "isLeaf": "0"
              },
              "children": [
                {
                  "nodeId": "371997444353040384",
                  "parentNodeId": "371996810908278784",
                  "parentNodeName": null,
                  "nodeName": "企业持续时间",
                  "attributes": {
                    "tagEn": "com_duration_fact",
                    "tagCn": "企业持续时间",
                    "createTime": "2019-09-18 20:46:08:000",
                    "parentTag": "371996810908278784",
                    "tenantId": "000",
                    "tagType": "0",
                    "id": "371997444353040384",
                    "tagLevel": "4",
                    "isLeaf": "1"
                  },
                  "children": [],
                  "isLeaf": true
                },
                {
                  "nodeId": "371998904532869120",
                  "parentNodeId": "371996810908278784",
                  "parentNodeName": null,
                  "nodeName": "企业经营规模",
                  "attributes": {
                    "tagEn": "staffnum_range_fact",
                    "tagCn": "企业经营规模",
                    "createTime": "2019-09-18 20:51:56:000",
                    "parentTag": "371996810908278784",
                    "tenantId": "000",
                    "tagType": "0",
                    "id": "371998904532869120",
                    "tagLevel": "4",
                    "isLeaf": "1"
                  },
                  "children": [],
                  "isLeaf": true
                },
                {
                  "nodeId": "371999192488615936",
                  "parentNodeId": "371996810908278784",
                  "parentNodeName": null,
                  "nodeName": "企业人才竞争力",
                  "attributes": {
                    "tagEn": "avgsal_fact",
                    "tagCn": "企业人才竞争力",
                    "createTime": "2019-09-18 20:53:05:000",
                    "parentTag": "371996810908278784",
                    "tenantId": "000",
                    "tagType": "0",
                    "id": "371999192488615936",
                    "tagLevel": "4",
                    "isLeaf": "1"
                  },
                  "children": [],
                  "isLeaf": true
                },
                {
                  "nodeId": "371999433283608576",
                  "parentNodeId": "371996810908278784",
                  "parentNodeName": null,
                  "nodeName": "专利信息数",
                  "attributes": {
                    "tagEn": "patent_number_fact",
                    "tagCn": "专利信息数",
                    "createTime": "2019-09-18 20:54:02:000",
                    "parentTag": "371996810908278784",
                    "tenantId": "000",
                    "tagType": "0",
                    "id": "371999433283608576",
                    "tagLevel": "4",
                    "isLeaf": "1"
                  },
                  "children": [],
                  "isLeaf": true
                },
                {
                  "nodeId": "3780552637687136256",
                  "parentNodeId": "371996810908278784",
                  "parentNodeName": null,
                  "nodeName": "石伟",
                  "attributes": {
                    "tagEn": "shiwei",
                    "tagCn": "石伟",
                    "createTime": "2019-11-14 11:29:24:000",
                    "parentTag": "371996810908278784",
                    "tenantId": "000",
                    "tagType": "0",
                    "id": "3780552637687136256",
                    "tagLevel": "4",
                    "isLeaf": "0"
                  },
                  "children": [
                    {
                      "nodeId": "3780553805918240768",
                      "parentNodeId": "3780552637687136256",
                      "parentNodeName": null,
                      "nodeName": "石头",
                      "attributes": {
                        "tagEn": "wei",
                        "tagCn": "石头",
                        "createTime": "2019-11-14 11:29:57:000",
                        "parentTag": "3780552637687136256",
                        "tenantId": "000",
                        "tagType": "0",
                        "id": "3780553805918240768",
                        "tagLevel": "5",
                        "isLeaf": "1"
                      },
                      "children": [],
                      "isLeaf": true
                    }
                  ],
                  "isLeaf": false
                }
              ],
              "isLeaf": false
            }
          ],
          "isLeaf": false
        },
        {
          "nodeId": "371999901325991936",
          "parentNodeId": "371995476586930176",
          "parentNodeName": null,
          "nodeName": "履约信用",
          "attributes": {
            "tagEn": "pc_fact",
            "tagCn": "履约信用",
            "createTime": "2019-09-18 20:55:54:000",
            "parentTag": "371995476586930176",
            "tenantId": "000",
            "tagType": "0",
            "id": "371999901325991936",
            "tagLevel": "2",
            "isLeaf": "0"
          },
          "children": [
            {
              "nodeId": "372000016652574720",
              "parentNodeId": "371999901325991936",
              "parentNodeName": null,
              "nodeName": "经营信用",
              "attributes": {
                "tagEn": "bc_fact",
                "tagCn": "经营信用",
                "createTime": "2019-09-18 20:56:21:000",
                "parentTag": "371999901325991936",
                "tenantId": "000",
                "tagType": "0",
                "id": "372000016652574720",
                "tagLevel": "3",
                "isLeaf": "0"
              },
              "children": [
                {
                  "nodeId": "372000388456652800",
                  "parentNodeId": "372000016652574720",
                  "parentNodeName": null,
                  "nodeName": "近2年涉诉案件诉讼地位为被告的案件数",
                  "attributes": {
                    "tagEn": "two_year_caseNum_fact",
                    "tagCn": "近2年涉诉案件诉讼地位为被告的案件数",
                    "createTime": "2019-09-18 20:57:50:000",
                    "parentTag": "372000016652574720",
                    "tenantId": "000",
                    "tagType": "0",
                    "id": "372000388456652800",
                    "tagLevel": "4",
                    "isLeaf": "1"
                  },
                  "children": [],
                  "isLeaf": true
                },
                {
                  "nodeId": "372000763276435456",
                  "parentNodeId": "372000016652574720",
                  "parentNodeName": null,
                  "nodeName": "近2年公司欠税信息数",
                  "attributes": {
                    "tagEn": "two_year_owing_taxes_fact",
                    "tagCn": "近2年公司欠税信息数",
                    "createTime": "2019-09-18 20:59:19:000",
                    "parentTag": "372000016652574720",
                    "tenantId": "000",
                    "tagType": "0",
                    "id": "372000763276435456",
                    "tagLevel": "4",
                    "isLeaf": "1"
                  },
                  "children": [],
                  "isLeaf": true
                },
                {
                  "nodeId": "372001076519641088",
                  "parentNodeId": "372000016652574720",
                  "parentNodeName": null,
                  "nodeName": "近2年公司行政处罚信息数",
                  "attributes": {
                    "tagEn": "two_year_punish_fact",
                    "tagCn": "近2年公司行政处罚信息数",
                    "createTime": "2019-09-18 21:00:34:000",
                    "parentTag": "372000016652574720",
                    "tenantId": "000",
                    "tagType": "0",
                    "id": "372001076519641088",
                    "tagLevel": "4",
                    "isLeaf": "1"
                  },
                  "children": [],
                  "isLeaf": true
                },
                {
                  "nodeId": "372001559334363136",
                  "parentNodeId": "372000016652574720",
                  "parentNodeName": null,
                  "nodeName": "股权出质状态为有效的标的数额比例",
                  "attributes": {
                    "tagEn": "stock_right_status_fact",
                    "tagCn": "股权出质状态为有效的标的数额比例",
                    "createTime": "2019-09-18 21:02:29:000",
                    "parentTag": "372000016652574720",
                    "tenantId": "000",
                    "tagType": "0",
                    "id": "372001559334363136",
                    "tagLevel": "4",
                    "isLeaf": "1"
                  },
                  "children": [],
                  "isLeaf": true
                },
                {
                  "nodeId": "372001969533100032",
                  "parentNodeId": "372000016652574720",
                  "parentNodeName": null,
                  "nodeName": "抵押状态为有效的被担保债权数额",
                  "attributes": {
                    "tagEn": "claims_amount_fact",
                    "tagCn": "抵押状态为有效的被担保债权数额",
                    "createTime": "2019-09-18 21:04:07:000",
                    "parentTag": "372000016652574720",
                    "tenantId": "000",
                    "tagType": "0",
                    "id": "372001969533100032",
                    "tagLevel": "4",
                    "isLeaf": "1"
                  },
                  "children": [],
                  "isLeaf": true
                },
                {
                  "nodeId": "372002153725960192",
                  "parentNodeId": "372000016652574720",
                  "parentNodeName": null,
                  "nodeName": "对外投资一度关联投资发生风险企业数",
                  "attributes": {
                    "tagEn": "risk_company_num_fact",
                    "tagCn": "对外投资一度关联投资发生风险企业数",
                    "createTime": "2019-09-18 21:04:51:000",
                    "parentTag": "372000016652574720",
                    "tenantId": "000",
                    "tagType": "0",
                    "id": "372002153725960192",
                    "tagLevel": "4",
                    "isLeaf": "1"
                  },
                  "children": [],
                  "isLeaf": true
                }
              ],
              "isLeaf": false
            }
          ],
          "isLeaf": false
        },
        {
          "nodeId": "372002390364397568",
          "parentNodeId": "371995476586930176",
          "parentNodeName": null,
          "nodeName": "履约能力",
          "attributes": {
            "tagEn": "pa_fact",
            "tagCn": "履约能力",
            "createTime": "2019-09-18 21:05:47:000",
            "parentTag": "371995476586930176",
            "tenantId": "000",
            "tagType": "0",
            "id": "372002390364397568",
            "tagLevel": "2",
            "isLeaf": "0"
          },
          "children": [
            {
              "nodeId": "372002595532972032",
              "parentNodeId": "372002390364397568",
              "parentNodeName": null,
              "nodeName": "经营能力",
              "attributes": {
                "tagEn": "ma_fact",
                "tagCn": "经营能力",
                "createTime": "2019-09-18 21:06:36:000",
                "parentTag": "372002390364397568",
                "tenantId": "000",
                "tagType": "0",
                "id": "372002595532972032",
                "tagLevel": "3",
                "isLeaf": "0"
              },
              "children": [
                {
                  "nodeId": "372003229921452032",
                  "parentNodeId": "372002595532972032",
                  "parentNodeName": null,
                  "nodeName": "最近5年纳税等级降级频次",
                  "attributes": {
                    "tagEn": "five_year_df_fact",
                    "tagCn": "最近5年纳税等级降级频次",
                    "createTime": "2019-09-18 21:09:07:000",
                    "parentTag": "372002595532972032",
                    "tenantId": "000",
                    "tagType": "0",
                    "id": "372003229921452032",
                    "tagLevel": "4",
                    "isLeaf": "1"
                  },
                  "children": [],
                  "isLeaf": true
                },
                {
                  "nodeId": "372003542837501952",
                  "parentNodeId": "372002595532972032",
                  "parentNodeName": null,
                  "nodeName": "企业经营规模近6个月平均增幅",
                  "attributes": {
                    "tagEn": "six_month_scale_incr_fact",
                    "tagCn": "企业经营规模近6个月平均增幅",
                    "createTime": "2019-09-18 21:10:22:000",
                    "parentTag": "372002595532972032",
                    "tenantId": "000",
                    "tagType": "0",
                    "id": "372003542837501952",
                    "tagLevel": "4",
                    "isLeaf": "1"
                  },
                  "children": [],
                  "isLeaf": true
                },
                {
                  "nodeId": "372004017305559040",
                  "parentNodeId": "372002595532972032",
                  "parentNodeName": null,
                  "nodeName": "管理人员（含法人）近2两年变更次数",
                  "attributes": {
                    "tagEn": "two_year_mc_num_fact",
                    "tagCn": "管理人员（含法人）近2两年变更次数",
                    "createTime": "2019-09-18 21:12:15:000",
                    "parentTag": "372002595532972032",
                    "tenantId": "000",
                    "tagType": "0",
                    "id": "372004017305559040",
                    "tagLevel": "4",
                    "isLeaf": "1"
                  },
                  "children": [],
                  "isLeaf": true
                },
                {
                  "nodeId": "372004286634401792",
                  "parentNodeId": "372002595532972032",
                  "parentNodeName": null,
                  "nodeName": "最近2年（近1/2/3…年时间内）新增投资企业数",
                  "attributes": {
                    "tagEn": "two_year_com_incr_fact",
                    "tagCn": "最近2年（近1/2/3…年时间内）新增投资企业数",
                    "createTime": "2019-09-18 21:13:19:000",
                    "parentTag": "372002595532972032",
                    "tenantId": "000",
                    "tagType": "0",
                    "id": "372004286634401792",
                    "tagLevel": "4",
                    "isLeaf": "1"
                  },
                  "children": [],
                  "isLeaf": true
                },
                {
                  "nodeId": "372004516016693248",
                  "parentNodeId": "372002595532972032",
                  "parentNodeName": null,
                  "nodeName": "当前对外投资企业总数",
                  "attributes": {
                    "tagEn": "invest_num_fact",
                    "tagCn": "当前对外投资企业总数",
                    "createTime": "2019-09-18 21:14:14:000",
                    "parentTag": "372002595532972032",
                    "tenantId": "000",
                    "tagType": "0",
                    "id": "372004516016693248",
                    "tagLevel": "4",
                    "isLeaf": "1"
                  },
                  "children": [],
                  "isLeaf": true
                }
              ],
              "isLeaf": false
            }
          ],
          "isLeaf": false
        }
      ],
      "isLeaf": false
    },
    {
      "nodeId": "3730665493032468480",
      "parentNodeId": null,
      "parentNodeName": null,
      "nodeName": "个人",
      "attributes": {
        "tagEn": "p_client_fact",
        "tagCn": "个人",
        "createTime": "2019-10-28 16:10:57:000",
        "parentTag": null,
        "tenantId": "000",
        "tagType": "0",
        "id": "3730665493032468480",
        "tagLevel": "1",
        "isLeaf": "0"
      },
      "children": [
        {
          "nodeId": "3730666798702526464",
          "parentNodeId": "3730665493032468480",
          "parentNodeName": null,
          "nodeName": "基本信息",
          "attributes": {
            "tagEn": "p_base_info",
            "tagCn": "基本信息",
            "createTime": "2019-10-28 16:11:35:000",
            "parentTag": "3730665493032468480",
            "tenantId": "000",
            "tagType": "0",
            "id": "3730666798702526464",
            "tagLevel": "2",
            "isLeaf": "0"
          },
          "children": [
            {
              "nodeId": "3730668551049183232",
              "parentNodeId": "3730666798702526464",
              "parentNodeName": null,
              "nodeName": "所在城市",
              "attributes": {
                "tagEn": "p_base_city",
                "tagCn": "所在城市",
                "createTime": "2019-10-28 16:12:26:000",
                "parentTag": "3730666798702526464",
                "tenantId": "000",
                "tagType": "0",
                "id": "3730668551049183232",
                "tagLevel": "3",
                "isLeaf": "1"
              },
              "children": [],
              "isLeaf": true
            },
            {
              "nodeId": "3730669616201072640",
              "parentNodeId": "3730666798702526464",
              "parentNodeName": null,
              "nodeName": "年龄",
              "attributes": {
                "tagEn": "p_base_age",
                "tagCn": "年龄",
                "createTime": "2019-10-28 16:12:56:000",
                "parentTag": "3730666798702526464",
                "tenantId": "000",
                "tagType": "0",
                "id": "3730669616201072640",
                "tagLevel": "3",
                "isLeaf": "1"
              },
              "children": [],
              "isLeaf": true
            },
            {
              "nodeId": "3730670750072438784",
              "parentNodeId": "3730666798702526464",
              "parentNodeName": null,
              "nodeName": "身份证地址",
              "attributes": {
                "tagEn": "p_base_card_address",
                "tagCn": "身份证地址",
                "createTime": "2019-10-28 16:13:29:000",
                "parentTag": "3730666798702526464",
                "tenantId": "000",
                "tagType": "0",
                "id": "3730670750072438784",
                "tagLevel": "3",
                "isLeaf": "1"
              },
              "children": [],
              "isLeaf": true
            },
            {
              "nodeId": "3756638156703793152",
              "parentNodeId": "3730666798702526464",
              "parentNodeName": null,
              "nodeName": "身份证号",
              "attributes": {
                "tagEn": "p_base_card_id",
                "tagCn": "身份证号",
                "createTime": "2019-11-06 10:09:21:000",
                "parentTag": "3730666798702526464",
                "tenantId": "000",
                "tagType": "0",
                "id": "3756638156703793152",
                "tagLevel": "3",
                "isLeaf": "1"
              },
              "children": [],
              "isLeaf": true
            }
          ],
          "isLeaf": false
        }
      ],
      "isLeaf": false
    }
  ],
  "ask": null,
  "serialNo": null,
  "idemSerialNo": null,
  "tenantId": null,
  "channelNo": null,
  "transDateTime": null
};


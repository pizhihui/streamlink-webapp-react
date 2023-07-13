import styled from 'styled-components'
// import { fileURLToPath, URL } from 'node:url'
import kafkaPath from '@/assets/kafka-logo.png'
import chPath from '@/assets/ch_logo_docs.svg'
import hbasePath from '@/assets/hbase-logo.png'

export const LeftWrapper = styled.div`
  width: 300px;
  //background-color: #f00;
  border: 1px solid slategray;

  .left-dragger-row {
    .left-dragger-title {
      text-align: center;
      font-size: 16px;
      color: #333;
      padding: 15px 10px;
      border-bottom: 1px solid #ccc;
      font-weight: bold;
    }
    .left-dragger-body {
      padding: 10px 20px;
      display: flex;
      .kafka-node {
        background: url(${kafkaPath}) no-repeat center / 70px 30px;
      }
      .clickhouse-node {
        background: url(${chPath}) no-repeat center / 90px 50px;
      }
      .hbase-node {
        background: url(${hbasePath}) no-repeat center / 90px 25px;
      }
      .left-dragger-item {
        display: inline-block;
        border: 1px solid #8f8f8f;
        background-color: #f2f2f2;
        border-radius: 3px;
        color: #333;
        width: 92px;
        height: 40px;
        line-height: 40px;
        font-size: 13px;
        text-align: center;
        cursor: pointer;
        margin-right: 10px;
      }
    }
  }
`

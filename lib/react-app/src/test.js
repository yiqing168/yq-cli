import uuid from "uuid";
export function treeConversion(treeData) {
  let dataSource = [];
  let columnsMap = {};
  function addKey(tagLevel) {
    if (!columnsMap.hasOwnProperty(tagLevel)) {
      let key = uuid.v1();
      columnsMap[tagLevel] = key;
    }
  }
  function loopOne(list, obj, rowSpan) {
    // 叶子节点
    const leafChild = list.children.filter((child) => {
      return child.isLeaf;
    })
    // 有叶子节点
    if (leafChild.length) {
      let tagLevel = leafChild[0].attributes.tagLevel;
      addKey(tagLevel);
      let leafKey = columnsMap[tagLevel];
      obj[leafKey] = leafChild.map(item => {
        return {
          nodeName: item.nodeName,
          nodeId: item.nodeId,
          rowSpan: 1
        }
      })
      // 非叶子节点
      const notLeafChild = list.children.filter((child) => {
        return !child.isLeaf;
      })
      if (notLeafChild.length) {
        rowSpan += loop(notLeafChild, 0);
      } else {
        return { obj, rowSpan: 0 };
      }
    } else {
      // 没有叶子节点
      let firstChild = list.children[0];
      let tagLevel = firstChild.attributes.tagLevel;
      addKey(tagLevel);
      let firstKey = columnsMap[tagLevel];
      obj[firstKey] = {
        nodeName: firstChild.nodeName,
        nodeId: firstChild.nodeId,
        rowSpan: 1
      };
      if (firstChild.children && firstChild.children.length) {
        let result = loopOne(firstChild, obj, obj[firstKey].rowSpan);
        obj[firstKey].rowSpan = result.rowSpan;
        rowSpan = result.rowSpan;
        obj = { ...obj, ...result.obj };

      }
      let otherAllChild = list.children.slice(1);
      if (otherAllChild.length) {
        rowSpan += loop(otherAllChild, 0);
      }
    }
    return { obj, rowSpan };
  }
  function loop(data, parentTotal) {
    data.forEach((item) => {
      parentTotal++;
      let tagLevel = item.attributes.tagLevel;
      addKey(tagLevel);
      let key = columnsMap[tagLevel];
      let obj = {
        nodeId: item.nodeId,
        [key]: {
          nodeName: item.nodeName,
          nodeId: item.nodeId,
          rowSpan: 1
        }
      };
      dataSource.push(obj);
      if (item.children && item.children.length) {
        let result = loopOne(item, obj, obj[key].rowSpan);
        obj = { ...obj, ...result.obj };
        obj[key].rowSpan = result.rowSpan;
        parentTotal += result.rowSpan > 0 ? result.rowSpan - 1 : 0;
      }
    })
    return parentTotal;
  }
  loop(treeData, 1);
  let columnsData = Object.keys(columnsMap).sort().map((key) => {
    return {
      dataIndex: columnsMap[key],
      key: columnsMap[key],
      title: `${Number(key)}级标签`,
      width: 150
    };
  })
  let columnsArray = Object.keys(columnsMap).sort().map(key => {
    return columnsMap[key];
  });
  dataSource.forEach((data) => {
    const { nodeId, ...allKeys } = data;
    let maxIndex = 0;
    Object.keys(allKeys).forEach(list => {
      let index = columnsArray.indexOf(list);
      if (index > maxIndex) {
        maxIndex = index;
      }
    })
    if (maxIndex < columnsArray.length - 1) {
      for (var i = maxIndex + 1; i < columnsArray.length; i++) {
        data[columnsArray[i]] = {
          nodeName: ""
        }
      }
    }
  })
  return { columnsData, dataSource };
}
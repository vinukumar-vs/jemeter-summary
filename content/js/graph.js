/*
   Licensed to the Apache Software Foundation (ASF) under one or more
   contributor license agreements.  See the NOTICE file distributed with
   this work for additional information regarding copyright ownership.
   The ASF licenses this file to You under the Apache License, Version 2.0
   (the "License"); you may not use this file except in compliance with
   the License.  You may obtain a copy of the License at

       http://www.apache.org/licenses/LICENSE-2.0

   Unless required by applicable law or agreed to in writing, software
   distributed under the License is distributed on an "AS IS" BASIS,
   WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   See the License for the specific language governing permissions and
   limitations under the License.
*/
$(document).ready(function() {

    $(".click-title").mouseenter( function(    e){
        e.preventDefault();
        this.style.cursor="pointer";
    });
    $(".click-title").mousedown( function(event){
        event.preventDefault();
    });

    // Ugly code while this script is shared among several pages
    try{
        refreshHitsPerSecond(true);
    } catch(e){}
    try{
        refreshResponseTimeOverTime(true);
    } catch(e){}
    try{
        refreshResponseTimePercentiles();
    } catch(e){}
});


var responseTimePercentilesInfos = {
        data: {"result": {"minY": 0.0, "minX": 0.0, "maxY": 1645.0, "series": [{"data": [[0.0, 0.0], [0.1, 1.0], [0.2, 1.0], [0.3, 1.0], [0.4, 1.0], [0.5, 2.0], [0.6, 2.0], [0.7, 2.0], [0.8, 2.0], [0.9, 2.0], [1.0, 10.0], [1.1, 11.0], [1.2, 12.0], [1.3, 12.0], [1.4, 13.0], [1.5, 13.0], [1.6, 14.0], [1.7, 14.0], [1.8, 14.0], [1.9, 15.0], [2.0, 15.0], [2.1, 15.0], [2.2, 16.0], [2.3, 16.0], [2.4, 16.0], [2.5, 17.0], [2.6, 17.0], [2.7, 17.0], [2.8, 17.0], [2.9, 18.0], [3.0, 18.0], [3.1, 18.0], [3.2, 18.0], [3.3, 19.0], [3.4, 19.0], [3.5, 19.0], [3.6, 19.0], [3.7, 20.0], [3.8, 20.0], [3.9, 20.0], [4.0, 20.0], [4.1, 20.0], [4.2, 21.0], [4.3, 21.0], [4.4, 21.0], [4.5, 21.0], [4.6, 22.0], [4.7, 22.0], [4.8, 22.0], [4.9, 22.0], [5.0, 22.0], [5.1, 23.0], [5.2, 23.0], [5.3, 23.0], [5.4, 23.0], [5.5, 24.0], [5.6, 24.0], [5.7, 24.0], [5.8, 24.0], [5.9, 24.0], [6.0, 25.0], [6.1, 25.0], [6.2, 25.0], [6.3, 25.0], [6.4, 25.0], [6.5, 26.0], [6.6, 26.0], [6.7, 26.0], [6.8, 26.0], [6.9, 26.0], [7.0, 27.0], [7.1, 27.0], [7.2, 27.0], [7.3, 27.0], [7.4, 27.0], [7.5, 28.0], [7.6, 28.0], [7.7, 28.0], [7.8, 28.0], [7.9, 28.0], [8.0, 29.0], [8.1, 29.0], [8.2, 29.0], [8.3, 29.0], [8.4, 29.0], [8.5, 30.0], [8.6, 30.0], [8.7, 30.0], [8.8, 30.0], [8.9, 30.0], [9.0, 31.0], [9.1, 31.0], [9.2, 31.0], [9.3, 31.0], [9.4, 31.0], [9.5, 32.0], [9.6, 32.0], [9.7, 32.0], [9.8, 32.0], [9.9, 32.0], [10.0, 33.0], [10.1, 33.0], [10.2, 33.0], [10.3, 33.0], [10.4, 33.0], [10.5, 33.0], [10.6, 34.0], [10.7, 34.0], [10.8, 34.0], [10.9, 34.0], [11.0, 34.0], [11.1, 34.0], [11.2, 35.0], [11.3, 35.0], [11.4, 35.0], [11.5, 35.0], [11.6, 35.0], [11.7, 36.0], [11.8, 36.0], [11.9, 36.0], [12.0, 36.0], [12.1, 36.0], [12.2, 36.0], [12.3, 37.0], [12.4, 37.0], [12.5, 37.0], [12.6, 37.0], [12.7, 37.0], [12.8, 37.0], [12.9, 38.0], [13.0, 38.0], [13.1, 38.0], [13.2, 38.0], [13.3, 38.0], [13.4, 38.0], [13.5, 39.0], [13.6, 39.0], [13.7, 39.0], [13.8, 39.0], [13.9, 39.0], [14.0, 39.0], [14.1, 40.0], [14.2, 40.0], [14.3, 40.0], [14.4, 40.0], [14.5, 40.0], [14.6, 41.0], [14.7, 41.0], [14.8, 41.0], [14.9, 41.0], [15.0, 41.0], [15.1, 41.0], [15.2, 42.0], [15.3, 42.0], [15.4, 42.0], [15.5, 42.0], [15.6, 42.0], [15.7, 43.0], [15.8, 43.0], [15.9, 43.0], [16.0, 43.0], [16.1, 43.0], [16.2, 43.0], [16.3, 44.0], [16.4, 44.0], [16.5, 44.0], [16.6, 44.0], [16.7, 44.0], [16.8, 45.0], [16.9, 45.0], [17.0, 45.0], [17.1, 45.0], [17.2, 45.0], [17.3, 46.0], [17.4, 46.0], [17.5, 46.0], [17.6, 46.0], [17.7, 46.0], [17.8, 47.0], [17.9, 47.0], [18.0, 47.0], [18.1, 47.0], [18.2, 47.0], [18.3, 48.0], [18.4, 48.0], [18.5, 48.0], [18.6, 48.0], [18.7, 48.0], [18.8, 49.0], [18.9, 49.0], [19.0, 49.0], [19.1, 49.0], [19.2, 49.0], [19.3, 50.0], [19.4, 50.0], [19.5, 50.0], [19.6, 50.0], [19.7, 51.0], [19.8, 51.0], [19.9, 51.0], [20.0, 51.0], [20.1, 51.0], [20.2, 52.0], [20.3, 52.0], [20.4, 52.0], [20.5, 52.0], [20.6, 53.0], [20.7, 53.0], [20.8, 53.0], [20.9, 53.0], [21.0, 53.0], [21.1, 54.0], [21.2, 54.0], [21.3, 54.0], [21.4, 54.0], [21.5, 54.0], [21.6, 55.0], [21.7, 55.0], [21.8, 55.0], [21.9, 55.0], [22.0, 56.0], [22.1, 56.0], [22.2, 56.0], [22.3, 56.0], [22.4, 56.0], [22.5, 57.0], [22.6, 57.0], [22.7, 57.0], [22.8, 57.0], [22.9, 58.0], [23.0, 58.0], [23.1, 58.0], [23.2, 58.0], [23.3, 58.0], [23.4, 59.0], [23.5, 59.0], [23.6, 59.0], [23.7, 59.0], [23.8, 60.0], [23.9, 60.0], [24.0, 60.0], [24.1, 60.0], [24.2, 61.0], [24.3, 61.0], [24.4, 61.0], [24.5, 62.0], [24.6, 62.0], [24.7, 62.0], [24.8, 62.0], [24.9, 63.0], [25.0, 63.0], [25.1, 63.0], [25.2, 63.0], [25.3, 64.0], [25.4, 64.0], [25.5, 64.0], [25.6, 64.0], [25.7, 65.0], [25.8, 65.0], [25.9, 65.0], [26.0, 65.0], [26.1, 66.0], [26.2, 66.0], [26.3, 66.0], [26.4, 66.0], [26.5, 67.0], [26.6, 67.0], [26.7, 67.0], [26.8, 68.0], [26.9, 68.0], [27.0, 68.0], [27.1, 68.0], [27.2, 69.0], [27.3, 69.0], [27.4, 69.0], [27.5, 70.0], [27.6, 70.0], [27.7, 70.0], [27.8, 70.0], [27.9, 71.0], [28.0, 71.0], [28.1, 71.0], [28.2, 72.0], [28.3, 72.0], [28.4, 72.0], [28.5, 72.0], [28.6, 73.0], [28.7, 73.0], [28.8, 73.0], [28.9, 74.0], [29.0, 74.0], [29.1, 74.0], [29.2, 75.0], [29.3, 75.0], [29.4, 75.0], [29.5, 76.0], [29.6, 76.0], [29.7, 76.0], [29.8, 77.0], [29.9, 77.0], [30.0, 77.0], [30.1, 78.0], [30.2, 78.0], [30.3, 78.0], [30.4, 79.0], [30.5, 79.0], [30.6, 79.0], [30.7, 80.0], [30.8, 80.0], [30.9, 80.0], [31.0, 80.0], [31.1, 81.0], [31.2, 81.0], [31.3, 81.0], [31.4, 82.0], [31.5, 82.0], [31.6, 82.0], [31.7, 83.0], [31.8, 83.0], [31.9, 83.0], [32.0, 84.0], [32.1, 84.0], [32.2, 84.0], [32.3, 85.0], [32.4, 85.0], [32.5, 85.0], [32.6, 85.0], [32.7, 86.0], [32.8, 86.0], [32.9, 86.0], [33.0, 87.0], [33.1, 87.0], [33.2, 87.0], [33.3, 88.0], [33.4, 88.0], [33.5, 88.0], [33.6, 89.0], [33.7, 89.0], [33.8, 89.0], [33.9, 90.0], [34.0, 90.0], [34.1, 90.0], [34.2, 91.0], [34.3, 91.0], [34.4, 91.0], [34.5, 92.0], [34.6, 92.0], [34.7, 92.0], [34.8, 93.0], [34.9, 93.0], [35.0, 93.0], [35.1, 94.0], [35.2, 94.0], [35.3, 94.0], [35.4, 94.0], [35.5, 95.0], [35.6, 95.0], [35.7, 95.0], [35.8, 96.0], [35.9, 96.0], [36.0, 96.0], [36.1, 97.0], [36.2, 97.0], [36.3, 97.0], [36.4, 98.0], [36.5, 98.0], [36.6, 98.0], [36.7, 98.0], [36.8, 99.0], [36.9, 99.0], [37.0, 99.0], [37.1, 100.0], [37.2, 100.0], [37.3, 100.0], [37.4, 101.0], [37.5, 101.0], [37.6, 101.0], [37.7, 101.0], [37.8, 102.0], [37.9, 102.0], [38.0, 102.0], [38.1, 103.0], [38.2, 103.0], [38.3, 103.0], [38.4, 103.0], [38.5, 104.0], [38.6, 104.0], [38.7, 104.0], [38.8, 105.0], [38.9, 105.0], [39.0, 105.0], [39.1, 105.0], [39.2, 106.0], [39.3, 106.0], [39.4, 106.0], [39.5, 107.0], [39.6, 107.0], [39.7, 107.0], [39.8, 107.0], [39.9, 108.0], [40.0, 108.0], [40.1, 108.0], [40.2, 108.0], [40.3, 109.0], [40.4, 109.0], [40.5, 109.0], [40.6, 110.0], [40.7, 110.0], [40.8, 110.0], [40.9, 110.0], [41.0, 111.0], [41.1, 111.0], [41.2, 111.0], [41.3, 111.0], [41.4, 112.0], [41.5, 112.0], [41.6, 112.0], [41.7, 112.0], [41.8, 113.0], [41.9, 113.0], [42.0, 113.0], [42.1, 114.0], [42.2, 114.0], [42.3, 114.0], [42.4, 114.0], [42.5, 115.0], [42.6, 115.0], [42.7, 115.0], [42.8, 116.0], [42.9, 116.0], [43.0, 116.0], [43.1, 116.0], [43.2, 117.0], [43.3, 117.0], [43.4, 117.0], [43.5, 117.0], [43.6, 118.0], [43.7, 118.0], [43.8, 118.0], [43.9, 119.0], [44.0, 119.0], [44.1, 119.0], [44.2, 119.0], [44.3, 120.0], [44.4, 120.0], [44.5, 120.0], [44.6, 120.0], [44.7, 121.0], [44.8, 121.0], [44.9, 121.0], [45.0, 121.0], [45.1, 122.0], [45.2, 122.0], [45.3, 122.0], [45.4, 123.0], [45.5, 123.0], [45.6, 123.0], [45.7, 123.0], [45.8, 123.0], [45.9, 124.0], [46.0, 124.0], [46.1, 124.0], [46.2, 125.0], [46.3, 125.0], [46.4, 125.0], [46.5, 125.0], [46.6, 126.0], [46.7, 126.0], [46.8, 126.0], [46.9, 126.0], [47.0, 127.0], [47.1, 127.0], [47.2, 127.0], [47.3, 128.0], [47.4, 128.0], [47.5, 128.0], [47.6, 129.0], [47.7, 129.0], [47.8, 129.0], [47.9, 129.0], [48.0, 130.0], [48.1, 130.0], [48.2, 130.0], [48.3, 131.0], [48.4, 131.0], [48.5, 131.0], [48.6, 131.0], [48.7, 132.0], [48.8, 132.0], [48.9, 132.0], [49.0, 132.0], [49.1, 133.0], [49.2, 133.0], [49.3, 133.0], [49.4, 133.0], [49.5, 134.0], [49.6, 134.0], [49.7, 134.0], [49.8, 135.0], [49.9, 135.0], [50.0, 135.0], [50.1, 135.0], [50.2, 136.0], [50.3, 136.0], [50.4, 136.0], [50.5, 136.0], [50.6, 137.0], [50.7, 137.0], [50.8, 137.0], [50.9, 137.0], [51.0, 138.0], [51.1, 138.0], [51.2, 138.0], [51.3, 138.0], [51.4, 139.0], [51.5, 139.0], [51.6, 139.0], [51.7, 140.0], [51.8, 140.0], [51.9, 140.0], [52.0, 140.0], [52.1, 141.0], [52.2, 141.0], [52.3, 141.0], [52.4, 142.0], [52.5, 142.0], [52.6, 142.0], [52.7, 142.0], [52.8, 143.0], [52.9, 143.0], [53.0, 143.0], [53.1, 144.0], [53.2, 144.0], [53.3, 144.0], [53.4, 145.0], [53.5, 145.0], [53.6, 145.0], [53.7, 145.0], [53.8, 146.0], [53.9, 146.0], [54.0, 146.0], [54.1, 147.0], [54.2, 147.0], [54.3, 147.0], [54.4, 148.0], [54.5, 148.0], [54.6, 148.0], [54.7, 149.0], [54.8, 149.0], [54.9, 149.0], [55.0, 149.0], [55.1, 150.0], [55.2, 150.0], [55.3, 150.0], [55.4, 151.0], [55.5, 151.0], [55.6, 151.0], [55.7, 152.0], [55.8, 152.0], [55.9, 152.0], [56.0, 153.0], [56.1, 153.0], [56.2, 153.0], [56.3, 154.0], [56.4, 154.0], [56.5, 154.0], [56.6, 155.0], [56.7, 155.0], [56.8, 155.0], [56.9, 156.0], [57.0, 156.0], [57.1, 157.0], [57.2, 157.0], [57.3, 157.0], [57.4, 158.0], [57.5, 158.0], [57.6, 158.0], [57.7, 159.0], [57.8, 159.0], [57.9, 160.0], [58.0, 160.0], [58.1, 160.0], [58.2, 161.0], [58.3, 161.0], [58.4, 162.0], [58.5, 162.0], [58.6, 162.0], [58.7, 163.0], [58.8, 163.0], [58.9, 164.0], [59.0, 164.0], [59.1, 164.0], [59.2, 165.0], [59.3, 165.0], [59.4, 166.0], [59.5, 166.0], [59.6, 166.0], [59.7, 167.0], [59.8, 167.0], [59.9, 167.0], [60.0, 168.0], [60.1, 168.0], [60.2, 168.0], [60.3, 169.0], [60.4, 169.0], [60.5, 170.0], [60.6, 170.0], [60.7, 170.0], [60.8, 171.0], [60.9, 171.0], [61.0, 172.0], [61.1, 172.0], [61.2, 172.0], [61.3, 173.0], [61.4, 173.0], [61.5, 174.0], [61.6, 174.0], [61.7, 175.0], [61.8, 175.0], [61.9, 175.0], [62.0, 176.0], [62.1, 176.0], [62.2, 177.0], [62.3, 177.0], [62.4, 177.0], [62.5, 178.0], [62.6, 178.0], [62.7, 179.0], [62.8, 179.0], [62.9, 179.0], [63.0, 180.0], [63.1, 180.0], [63.2, 181.0], [63.3, 181.0], [63.4, 182.0], [63.5, 182.0], [63.6, 182.0], [63.7, 183.0], [63.8, 183.0], [63.9, 184.0], [64.0, 184.0], [64.1, 185.0], [64.2, 185.0], [64.3, 186.0], [64.4, 186.0], [64.5, 186.0], [64.6, 187.0], [64.7, 187.0], [64.8, 188.0], [64.9, 188.0], [65.0, 189.0], [65.1, 189.0], [65.2, 190.0], [65.3, 190.0], [65.4, 191.0], [65.5, 191.0], [65.6, 192.0], [65.7, 192.0], [65.8, 193.0], [65.9, 193.0], [66.0, 194.0], [66.1, 194.0], [66.2, 195.0], [66.3, 195.0], [66.4, 196.0], [66.5, 197.0], [66.6, 197.0], [66.7, 198.0], [66.8, 198.0], [66.9, 199.0], [67.0, 199.0], [67.1, 200.0], [67.2, 200.0], [67.3, 201.0], [67.4, 201.0], [67.5, 202.0], [67.6, 203.0], [67.7, 203.0], [67.8, 204.0], [67.9, 204.0], [68.0, 205.0], [68.1, 205.0], [68.2, 206.0], [68.3, 207.0], [68.4, 207.0], [68.5, 208.0], [68.6, 208.0], [68.7, 209.0], [68.8, 209.0], [68.9, 210.0], [69.0, 211.0], [69.1, 211.0], [69.2, 212.0], [69.3, 212.0], [69.4, 213.0], [69.5, 214.0], [69.6, 214.0], [69.7, 215.0], [69.8, 215.0], [69.9, 216.0], [70.0, 216.0], [70.1, 217.0], [70.2, 217.0], [70.3, 218.0], [70.4, 218.0], [70.5, 219.0], [70.6, 220.0], [70.7, 220.0], [70.8, 221.0], [70.9, 221.0], [71.0, 222.0], [71.1, 222.0], [71.2, 223.0], [71.3, 224.0], [71.4, 224.0], [71.5, 225.0], [71.6, 225.0], [71.7, 226.0], [71.8, 227.0], [71.9, 227.0], [72.0, 228.0], [72.1, 229.0], [72.2, 229.0], [72.3, 230.0], [72.4, 230.0], [72.5, 231.0], [72.6, 232.0], [72.7, 232.0], [72.8, 233.0], [72.9, 233.0], [73.0, 234.0], [73.1, 235.0], [73.2, 235.0], [73.3, 236.0], [73.4, 236.0], [73.5, 237.0], [73.6, 238.0], [73.7, 238.0], [73.8, 239.0], [73.9, 240.0], [74.0, 240.0], [74.1, 241.0], [74.2, 242.0], [74.3, 243.0], [74.4, 243.0], [74.5, 244.0], [74.6, 245.0], [74.7, 246.0], [74.8, 246.0], [74.9, 247.0], [75.0, 248.0], [75.1, 248.0], [75.2, 249.0], [75.3, 250.0], [75.4, 250.0], [75.5, 251.0], [75.6, 252.0], [75.7, 253.0], [75.8, 253.0], [75.9, 254.0], [76.0, 255.0], [76.1, 256.0], [76.2, 256.0], [76.3, 257.0], [76.4, 258.0], [76.5, 259.0], [76.6, 259.0], [76.7, 260.0], [76.8, 261.0], [76.9, 261.0], [77.0, 262.0], [77.1, 263.0], [77.2, 264.0], [77.3, 265.0], [77.4, 265.0], [77.5, 266.0], [77.6, 267.0], [77.7, 268.0], [77.8, 269.0], [77.9, 270.0], [78.0, 271.0], [78.1, 272.0], [78.2, 273.0], [78.3, 274.0], [78.4, 275.0], [78.5, 276.0], [78.6, 277.0], [78.7, 278.0], [78.8, 279.0], [78.9, 280.0], [79.0, 280.0], [79.1, 281.0], [79.2, 282.0], [79.3, 283.0], [79.4, 285.0], [79.5, 285.0], [79.6, 287.0], [79.7, 288.0], [79.8, 289.0], [79.9, 290.0], [80.0, 290.0], [80.1, 291.0], [80.2, 292.0], [80.3, 293.0], [80.4, 294.0], [80.5, 295.0], [80.6, 296.0], [80.7, 297.0], [80.8, 298.0], [80.9, 299.0], [81.0, 300.0], [81.1, 301.0], [81.2, 302.0], [81.3, 303.0], [81.4, 304.0], [81.5, 305.0], [81.6, 306.0], [81.7, 307.0], [81.8, 308.0], [81.9, 309.0], [82.0, 310.0], [82.1, 311.0], [82.2, 312.0], [82.3, 313.0], [82.4, 314.0], [82.5, 315.0], [82.6, 316.0], [82.7, 317.0], [82.8, 318.0], [82.9, 319.0], [83.0, 320.0], [83.1, 321.0], [83.2, 322.0], [83.3, 323.0], [83.4, 324.0], [83.5, 325.0], [83.6, 327.0], [83.7, 328.0], [83.8, 329.0], [83.9, 331.0], [84.0, 332.0], [84.1, 333.0], [84.2, 334.0], [84.3, 336.0], [84.4, 336.0], [84.5, 337.0], [84.6, 339.0], [84.7, 340.0], [84.8, 341.0], [84.9, 342.0], [85.0, 342.0], [85.1, 344.0], [85.2, 345.0], [85.3, 346.0], [85.4, 347.0], [85.5, 348.0], [85.6, 349.0], [85.7, 350.0], [85.8, 352.0], [85.9, 353.0], [86.0, 354.0], [86.1, 355.0], [86.2, 356.0], [86.3, 358.0], [86.4, 359.0], [86.5, 360.0], [86.6, 362.0], [86.7, 364.0], [86.8, 365.0], [86.9, 367.0], [87.0, 368.0], [87.1, 370.0], [87.2, 371.0], [87.3, 372.0], [87.4, 374.0], [87.5, 375.0], [87.6, 377.0], [87.7, 378.0], [87.8, 380.0], [87.9, 382.0], [88.0, 384.0], [88.1, 385.0], [88.2, 387.0], [88.3, 388.0], [88.4, 390.0], [88.5, 391.0], [88.6, 393.0], [88.7, 395.0], [88.8, 396.0], [88.9, 398.0], [89.0, 399.0], [89.1, 400.0], [89.2, 402.0], [89.3, 403.0], [89.4, 405.0], [89.5, 407.0], [89.6, 408.0], [89.7, 411.0], [89.8, 412.0], [89.9, 414.0], [90.0, 416.0], [90.1, 418.0], [90.2, 419.0], [90.3, 421.0], [90.4, 422.0], [90.5, 424.0], [90.6, 426.0], [90.7, 428.0], [90.8, 430.0], [90.9, 432.0], [91.0, 433.0], [91.1, 435.0], [91.2, 437.0], [91.3, 439.0], [91.4, 441.0], [91.5, 443.0], [91.6, 445.0], [91.7, 447.0], [91.8, 448.0], [91.9, 450.0], [92.0, 453.0], [92.1, 455.0], [92.2, 458.0], [92.3, 460.0], [92.4, 462.0], [92.5, 465.0], [92.6, 467.0], [92.7, 469.0], [92.8, 472.0], [92.9, 474.0], [93.0, 477.0], [93.1, 479.0], [93.2, 482.0], [93.3, 484.0], [93.4, 486.0], [93.5, 489.0], [93.6, 491.0], [93.7, 495.0], [93.8, 497.0], [93.9, 500.0], [94.0, 503.0], [94.1, 506.0], [94.2, 509.0], [94.3, 513.0], [94.4, 517.0], [94.5, 520.0], [94.6, 524.0], [94.7, 527.0], [94.8, 530.0], [94.9, 533.0], [95.0, 535.0], [95.1, 537.0], [95.2, 540.0], [95.3, 543.0], [95.4, 547.0], [95.5, 551.0], [95.6, 554.0], [95.7, 557.0], [95.8, 560.0], [95.9, 563.0], [96.0, 567.0], [96.1, 571.0], [96.2, 574.0], [96.3, 577.0], [96.4, 581.0], [96.5, 585.0], [96.6, 589.0], [96.7, 592.0], [96.8, 596.0], [96.9, 600.0], [97.0, 603.0], [97.1, 606.0], [97.2, 610.0], [97.3, 614.0], [97.4, 619.0], [97.5, 624.0], [97.6, 630.0], [97.7, 636.0], [97.8, 643.0], [97.9, 650.0], [98.0, 655.0], [98.1, 665.0], [98.2, 678.0], [98.3, 688.0], [98.4, 695.0], [98.5, 707.0], [98.6, 718.0], [98.7, 731.0], [98.8, 744.0], [98.9, 757.0], [99.0, 771.0], [99.1, 781.0], [99.2, 795.0], [99.3, 815.0], [99.4, 835.0], [99.5, 864.0], [99.6, 891.0], [99.7, 923.0], [99.8, 974.0], [99.9, 1047.0], [100.0, 1645.0]], "isOverall": false, "label": "discussion-forum-user-upvotes", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
        getOptions: function() {
            return {
                series: {
                    points: { show: false }
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimePercentiles'
                },
                xaxis: {
                    tickDecimals: 1,
                    axisLabel: "Percentiles",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Percentile value in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : %x.2 percentile was %y ms"
                },
                selection: { mode: "xy" },
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesResponseTimePercentiles"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimesPercentiles"), dataset, options);
            // setup overview
            $.plot($("#overviewResponseTimesPercentiles"), dataset, prepareOverviewOptions(options));
        }
};

/**
 * @param elementId Id of element where we display message
 */
function setEmptyGraph(elementId) {
    $(function() {
        $(elementId).text("No graph series with filter="+seriesFilter);
    });
}

// Response times percentiles
function refreshResponseTimePercentiles() {
    var infos = responseTimePercentilesInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyResponseTimePercentiles");
        return;
    }
    if (isGraph($("#flotResponseTimesPercentiles"))){
        infos.createGraph();
    } else {
        var choiceContainer = $("#choicesResponseTimePercentiles");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimesPercentiles", "#overviewResponseTimesPercentiles");
        $('#bodyResponseTimePercentiles .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
}

var responseTimeDistributionInfos = {
        data: {"result": {"minY": 1.0, "minX": 0.0, "maxY": 37009.0, "series": [{"data": [[0.0, 37009.0], [600.0, 1539.0], [700.0, 802.0], [200.0, 13937.0], [800.0, 398.0], [900.0, 221.0], [1000.0, 81.0], [1100.0, 33.0], [300.0, 8056.0], [1200.0, 12.0], [1300.0, 21.0], [1400.0, 1.0], [1500.0, 3.0], [100.0, 30021.0], [400.0, 4849.0], [1600.0, 10.0], [500.0, 3007.0]], "isOverall": false, "label": "discussion-forum-user-upvotes", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 1600.0, "title": "Response Time Distribution"}},
        getOptions: function() {
            var granularity = this.data.result.granularity;
            return {
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimeDistribution'
                },
                xaxis:{
                    axisLabel: "Response times in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of responses",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                bars : {
                    show: true,
                    barWidth: this.data.result.granularity
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: function(label, xval, yval, flotItem){
                        return yval + " responses for " + label + " were between " + xval + " and " + (xval + granularity) + " ms";
                    }
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimeDistribution"), prepareData(data.result.series, $("#choicesResponseTimeDistribution")), options);
        }

};

// Response time distribution
function refreshResponseTimeDistribution() {
    var infos = responseTimeDistributionInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyResponseTimeDistribution");
        return;
    }
    if (isGraph($("#flotResponseTimeDistribution"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesResponseTimeDistribution");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        $('#footerResponseTimeDistribution .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};


var syntheticResponseTimeDistributionInfos = {
        data: {"result": {"minY": 13.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 92930.0, "series": [{"data": [[0.0, 92930.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 6069.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [[2.0, 13.0]], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [[3.0, 988.0]], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 3.0, "title": "Synthetic Response Times Distribution"}},
        getOptions: function() {
            return {
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendSyntheticResponseTimeDistribution'
                },
                xaxis:{
                    axisLabel: "Response times ranges",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                    tickLength:0,
                    min:-0.5,
                    max:3.5
                },
                yaxis: {
                    axisLabel: "Number of responses",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                bars : {
                    show: true,
                    align: "center",
                    barWidth: 0.25,
                    fill:.75
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: function(label, xval, yval, flotItem){
                        return yval + " " + label;
                    }
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var options = this.getOptions();
            prepareOptions(options, data);
            options.xaxis.ticks = data.result.ticks;
            $.plot($("#flotSyntheticResponseTimeDistribution"), prepareData(data.result.series, $("#choicesSyntheticResponseTimeDistribution")), options);
        }

};

// Response time distribution
function refreshSyntheticResponseTimeDistribution() {
    var infos = syntheticResponseTimeDistributionInfos;
    prepareSeries(infos.data, true);
    if (isGraph($("#flotSyntheticResponseTimeDistribution"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesSyntheticResponseTimeDistribution");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        $('#footerSyntheticResponseTimeDistribution .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var activeThreadsOverTimeInfos = {
        data: {"result": {"minY": 18.03156675354769, "minX": 1.62937974E12, "maxY": 25.0, "series": [{"data": [[1.6293798E12, 25.0], [1.62937992E12, 20.692775151924398], [1.62937974E12, 18.03156675354769], [1.62937986E12, 25.0]], "isOverall": false, "label": "28.0.0.43-discussion-forum-user-upvotes", "isController": false}, {"data": [[1.6293798E12, 25.0], [1.62937992E12, 20.72738095238098], [1.62937974E12, 18.1005967604433], [1.62937986E12, 25.0]], "isOverall": false, "label": "28.0.0.45-discussion-forum-user-upvotes", "isController": false}, {"data": [[1.6293798E12, 25.0], [1.62937992E12, 20.86827363775245], [1.62937974E12, 18.077056778679008], [1.62937986E12, 25.0]], "isOverall": false, "label": "28.0.0.37-discussion-forum-user-upvotes", "isController": false}, {"data": [[1.6293798E12, 25.0], [1.62937992E12, 20.865651664714743], [1.62937974E12, 18.114017628660793], [1.62937986E12, 25.0]], "isOverall": false, "label": "28.0.0.44-discussion-forum-user-upvotes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.62937992E12, "title": "Active Threads Over Time"}},
        getOptions: function() {
            return {
                series: {
                    stack: true,
                    lines: {
                        show: true,
                        fill: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of active threads",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 6,
                    show: true,
                    container: '#legendActiveThreadsOverTime'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                selection: {
                    mode: 'xy'
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : At %x there were %y active threads"
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesActiveThreadsOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotActiveThreadsOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewActiveThreadsOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Active Threads Over Time
function refreshActiveThreadsOverTime(fixTimestamps) {
    var infos = activeThreadsOverTimeInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 0);
    }
    if(isGraph($("#flotActiveThreadsOverTime"))) {
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesActiveThreadsOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotActiveThreadsOverTime", "#overviewActiveThreadsOverTime");
        $('#footerActiveThreadsOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var timeVsThreadsInfos = {
        data: {"result": {"minY": 79.96644295302012, "minX": 1.0, "maxY": 293.824137931034, "series": [{"data": [[2.0, 81.49618320610686], [3.0, 152.05769230769238], [4.0, 79.96644295302012], [5.0, 91.90822784810126], [6.0, 116.77481840193705], [7.0, 85.20258620689654], [8.0, 126.19148936170234], [9.0, 81.19620253164565], [10.0, 106.07742782152226], [11.0, 153.82352941176475], [12.0, 159.93901345291493], [13.0, 120.81124880838898], [14.0, 122.19967266775777], [15.0, 146.92008797653935], [1.0, 126.28571428571429], [16.0, 133.78019323671518], [17.0, 265.85596221959906], [18.0, 222.98573692551503], [19.0, 211.33604556550034], [20.0, 242.58364312267682], [21.0, 191.32365540218927], [22.0, 293.824137931034], [23.0, 247.1948051948054], [24.0, 215.16198563030684], [25.0, 188.00821055282776]], "isOverall": false, "label": "discussion-forum-user-upvotes", "isController": false}, {"data": [[23.03852999999962, 184.7277600000025]], "isOverall": false, "label": "discussion-forum-user-upvotes-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 25.0, "title": "Time VS Threads"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    axisLabel: "Number of active threads",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average response times in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: { noColumns: 2,show: true, container: '#legendTimeVsThreads' },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s: At %x.2 active threads, Average response time was %y.2 ms"
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesTimeVsThreads"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotTimesVsThreads"), dataset, options);
            // setup overview
            $.plot($("#overviewTimesVsThreads"), dataset, prepareOverviewOptions(options));
        }
};

// Time vs threads
function refreshTimeVsThreads(){
    var infos = timeVsThreadsInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyTimeVsThreads");
        return;
    }
    if(isGraph($("#flotTimesVsThreads"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesTimeVsThreads");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotTimesVsThreads", "#overviewTimesVsThreads");
        $('#footerTimeVsThreads .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var bytesThroughputOverTimeInfos = {
        data : {"result": {"minY": 393938.3, "minX": 1.62937974E12, "maxY": 4243013.033333333, "series": [{"data": [[1.6293798E12, 4243013.033333333], [1.62937992E12, 2991920.1166666667], [1.62937974E12, 1756160.6833333333], [1.62937986E12, 3518826.566666667]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.6293798E12, 975938.0166666667], [1.62937992E12, 669226.5333333333], [1.62937974E12, 393938.3], [1.62937986E12, 787795.4666666667]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.62937992E12, "title": "Bytes Throughput Over Time"}},
        getOptions : function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity) ,
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Bytes / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendBytesThroughputOverTime'
                },
                selection: {
                    mode: "xy"
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y"
                }
            };
        },
        createGraph : function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesBytesThroughputOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotBytesThroughputOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewBytesThroughputOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Bytes throughput Over Time
function refreshBytesThroughputOverTime(fixTimestamps) {
    var infos = bytesThroughputOverTimeInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 0);
    }
    if(isGraph($("#flotBytesThroughputOverTime"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesBytesThroughputOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotBytesThroughputOverTime", "#overviewBytesThroughputOverTime");
        $('#footerBytesThroughputOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
}

var responseTimesOverTimeInfos = {
        data: {"result": {"minY": 165.53827306522376, "minX": 1.62937974E12, "maxY": 215.0532189765318, "series": [{"data": [[1.6293798E12, 173.3233394165873], [1.62937992E12, 165.53827306522376], [1.62937974E12, 184.93551395165406], [1.62937986E12, 215.0532189765318]], "isOverall": false, "label": "discussion-forum-user-upvotes", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.62937992E12, "title": "Response Time Over Time"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average response time in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimesOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Average response time was %y ms"
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesResponseTimesOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimesOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewResponseTimesOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Response Times Over Time
function refreshResponseTimeOverTime(fixTimestamps) {
    var infos = responseTimesOverTimeInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyResponseTimeOverTime");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 0);
    }
    if(isGraph($("#flotResponseTimesOverTime"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesResponseTimesOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimesOverTime", "#overviewResponseTimesOverTime");
        $('#footerResponseTimesOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var latenciesOverTimeInfos = {
        data: {"result": {"minY": 165.53007772896373, "minX": 1.62937974E12, "maxY": 215.0455393669706, "series": [{"data": [[1.6293798E12, 173.31464905419722], [1.62937992E12, 165.53007772896373], [1.62937974E12, 184.92891471200133], [1.62937986E12, 215.0455393669706]], "isOverall": false, "label": "discussion-forum-user-upvotes", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.62937992E12, "title": "Latencies Over Time"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average response latencies in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendLatenciesOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Average latency was %y ms"
                }
            };
        },
        createGraph: function () {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesLatenciesOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotLatenciesOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewLatenciesOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Latencies Over Time
function refreshLatenciesOverTime(fixTimestamps) {
    var infos = latenciesOverTimeInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyLatenciesOverTime");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 0);
    }
    if(isGraph($("#flotLatenciesOverTime"))) {
        infos.createGraph();
    }else {
        var choiceContainer = $("#choicesLatenciesOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotLatenciesOverTime", "#overviewLatenciesOverTime");
        $('#footerLatenciesOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var connectTimeOverTimeInfos = {
        data: {"result": {"minY": 0.061078016220483554, "minX": 1.62937974E12, "maxY": 0.1389426870382317, "series": [{"data": [[1.6293798E12, 0.06937805973175755], [1.62937992E12, 0.0790385265292336], [1.62937974E12, 0.1389426870382317], [1.62937986E12, 0.061078016220483554]], "isOverall": false, "label": "discussion-forum-user-upvotes", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.62937992E12, "title": "Connect Time Over Time"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getConnectTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average Connect Time in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendConnectTimeOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Average connect time was %y ms"
                }
            };
        },
        createGraph: function () {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesConnectTimeOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotConnectTimeOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewConnectTimeOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Connect Time Over Time
function refreshConnectTimeOverTime(fixTimestamps) {
    var infos = connectTimeOverTimeInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyConnectTimeOverTime");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 0);
    }
    if(isGraph($("#flotConnectTimeOverTime"))) {
        infos.createGraph();
    }else {
        var choiceContainer = $("#choicesConnectTimeOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotConnectTimeOverTime", "#overviewConnectTimeOverTime");
        $('#footerConnectTimeOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var responseTimePercentilesOverTimeInfos = {
        data: {"result": {"minY": 8.0, "minX": 1.62937974E12, "maxY": 1645.0, "series": [{"data": [[1.6293798E12, 1645.0], [1.62937992E12, 1229.0], [1.62937974E12, 1218.0], [1.62937986E12, 1095.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.6293798E12, 16.0], [1.62937992E12, 13.0], [1.62937974E12, 12.0], [1.62937986E12, 19.0]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.6293798E12, 17.0], [1.62937992E12, 14.0], [1.62937974E12, 12.0], [1.62937986E12, 19.0]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.6293798E12, 17.0], [1.62937992E12, 13.0], [1.62937974E12, 12.0], [1.62937986E12, 19.0]], "isOverall": false, "label": "95th percentile", "isController": false}, {"data": [[1.6293798E12, 10.0], [1.62937992E12, 8.0], [1.62937974E12, 8.0], [1.62937986E12, 10.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.6293798E12, 120.0], [1.62937992E12, 116.0], [1.62937974E12, 125.0], [1.62937986E12, 159.0]], "isOverall": false, "label": "Median", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.62937992E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true,
                        fill: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Response Time in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimePercentilesOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Response time was %y ms"
                }
            };
        },
        createGraph: function () {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesResponseTimePercentilesOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimePercentilesOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewResponseTimePercentilesOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Response Time Percentiles Over Time
function refreshResponseTimePercentilesOverTime(fixTimestamps) {
    var infos = responseTimePercentilesOverTimeInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 0);
    }
    if(isGraph($("#flotResponseTimePercentilesOverTime"))) {
        infos.createGraph();
    }else {
        var choiceContainer = $("#choicesResponseTimePercentilesOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimePercentilesOverTime", "#overviewResponseTimePercentilesOverTime");
        $('#footerResponseTimePercentilesOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};


var responseTimeVsRequestInfos = {
    data: {"result": {"minY": 1.0, "minX": 4.0, "maxY": 940.0, "series": [{"data": [[4.0, 208.0], [18.0, 188.5], [42.0, 139.0], [83.0, 833.0], [87.0, 266.0], [107.0, 796.0], [109.0, 940.0], [118.0, 486.5], [127.0, 835.0], [124.0, 444.0], [128.0, 180.5], [135.0, 587.0], [130.0, 479.0], [150.0, 627.0], [144.0, 365.5], [152.0, 597.0], [156.0, 553.5], [164.0, 422.0], [166.0, 608.0], [174.0, 657.5], [173.0, 367.0], [178.0, 38.0], [180.0, 585.0], [181.0, 395.0], [191.0, 326.0], [189.0, 157.0], [194.0, 65.0], [200.0, 104.0], [202.0, 509.0], [205.0, 340.0], [223.0, 467.0], [222.0, 203.5], [231.0, 329.0], [237.0, 177.0], [239.0, 418.0], [235.0, 566.0], [233.0, 350.0], [238.0, 75.0], [242.0, 404.0], [247.0, 291.0], [254.0, 71.5], [252.0, 414.0], [271.0, 228.0], [266.0, 348.0], [287.0, 389.5], [274.0, 363.0], [286.0, 171.0], [292.0, 222.0], [294.0, 302.0], [300.0, 326.5], [295.0, 443.0], [303.0, 340.0], [313.0, 67.0], [310.0, 267.0], [309.0, 273.0], [319.0, 313.0], [333.0, 347.0], [322.0, 251.0], [335.0, 202.0], [345.0, 105.0], [348.0, 189.0], [344.0, 131.0], [336.0, 199.5], [339.0, 65.0], [353.0, 78.0], [372.0, 109.5], [376.0, 322.0], [368.0, 151.5], [390.0, 73.5], [384.0, 182.0], [389.0, 243.0], [403.0, 64.0], [404.0, 128.0], [405.0, 246.0], [408.0, 207.5], [426.0, 63.0], [422.0, 158.5], [416.0, 166.0], [431.0, 166.0], [424.0, 80.0], [439.0, 124.0], [435.0, 101.0], [447.0, 189.0], [437.0, 212.0], [436.0, 180.0], [444.0, 168.0], [445.0, 125.0], [456.0, 83.5], [462.0, 141.0], [448.0, 215.0], [455.0, 99.0], [459.0, 140.0], [465.0, 179.0], [477.0, 197.0], [464.0, 148.0], [469.0, 236.0], [467.0, 146.0], [476.0, 201.0], [473.0, 135.0], [486.0, 107.0], [491.0, 158.0], [484.0, 194.0], [492.0, 188.5], [487.0, 138.0], [488.0, 140.0], [483.0, 121.0], [499.0, 101.5], [507.0, 159.5], [497.0, 199.0], [517.0, 141.0], [528.0, 148.0], [542.0, 158.5], [514.0, 151.5], [529.0, 191.0], [539.0, 98.0], [574.0, 98.0], [564.0, 148.0], [546.0, 237.0], [548.0, 176.0], [569.0, 204.0], [561.0, 99.0], [599.0, 106.0], [578.0, 134.0], [602.0, 153.0], [603.0, 148.0], [579.0, 157.0], [589.0, 88.0], [631.0, 189.0], [611.0, 128.0], [626.0, 124.0], [632.0, 152.5], [628.0, 134.5], [622.0, 163.0], [616.0, 132.5], [653.0, 119.5], [649.0, 131.0], [663.0, 115.0], [668.0, 135.0], [660.0, 98.5], [658.0, 132.0], [666.0, 125.0], [643.0, 191.0], [672.0, 127.5], [677.0, 97.0], [679.0, 132.0], [722.0, 108.0], [718.0, 79.0], [724.0, 110.0], [712.0, 114.0], [725.0, 119.0], [714.0, 137.0], [737.0, 113.0], [748.0, 138.0], [749.0, 116.0], [767.0, 112.0], [747.0, 128.0], [758.0, 91.0], [763.0, 114.0], [764.0, 87.5], [798.0, 115.0], [781.0, 120.0], [790.0, 122.0], [773.0, 88.0], [785.0, 97.0], [802.0, 113.0], [819.0, 95.0], [825.0, 123.0], [817.0, 67.0], [806.0, 95.0], [895.0, 82.0], [918.0, 83.0], [905.0, 116.0], [928.0, 88.0], [937.0, 100.0], [932.0, 99.0], [947.0, 84.0], [969.0, 98.0], [975.0, 85.0], [1001.0, 82.0], [1033.0, 94.0], [1167.0, 137.0]], "isOverall": false, "label": "Successes", "isController": false}, {"data": [[564.0, 2.0], [546.0, 1.0], [1167.0, 1.0], [631.0, 2.0], [722.0, 2.0], [798.0, 2.0]], "isOverall": false, "label": "Failures", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 1167.0, "title": "Response Time Vs Request"}},
    getOptions: function() {
        return {
            series: {
                lines: {
                    show: false
                },
                points: {
                    show: true
                }
            },
            xaxis: {
                axisLabel: "Global number of requests per second",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            yaxis: {
                axisLabel: "Median Response Time in ms",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            legend: {
                noColumns: 2,
                show: true,
                container: '#legendResponseTimeVsRequest'
            },
            selection: {
                mode: 'xy'
            },
            grid: {
                hoverable: true // IMPORTANT! this is needed for tooltip to work
            },
            tooltip: true,
            tooltipOpts: {
                content: "%s : Median response time at %x req/s was %y ms"
            },
            colors: ["#9ACD32", "#FF6347"]
        };
    },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesResponseTimeVsRequest"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotResponseTimeVsRequest"), dataset, options);
        // setup overview
        $.plot($("#overviewResponseTimeVsRequest"), dataset, prepareOverviewOptions(options));

    }
};

// Response Time vs Request
function refreshResponseTimeVsRequest() {
    var infos = responseTimeVsRequestInfos;
    prepareSeries(infos.data);
    if (isGraph($("#flotResponseTimeVsRequest"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesResponseTimeVsRequest");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimeVsRequest", "#overviewResponseTimeVsRequest");
        $('#footerResponseRimeVsRequest .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};


var latenciesVsRequestInfos = {
    data: {"result": {"minY": 1.0, "minX": 4.0, "maxY": 940.0, "series": [{"data": [[4.0, 208.0], [18.0, 188.5], [42.0, 139.0], [83.0, 833.0], [87.0, 266.0], [107.0, 796.0], [109.0, 940.0], [118.0, 486.5], [127.0, 835.0], [124.0, 444.0], [128.0, 180.5], [135.0, 587.0], [130.0, 479.0], [150.0, 627.0], [144.0, 365.5], [152.0, 597.0], [156.0, 553.5], [164.0, 422.0], [166.0, 608.0], [174.0, 657.5], [173.0, 367.0], [178.0, 38.0], [180.0, 585.0], [181.0, 395.0], [191.0, 326.0], [189.0, 157.0], [194.0, 65.0], [200.0, 104.0], [202.0, 509.0], [205.0, 340.0], [223.0, 467.0], [222.0, 203.5], [231.0, 329.0], [237.0, 177.0], [239.0, 418.0], [235.0, 566.0], [233.0, 350.0], [238.0, 75.0], [242.0, 404.0], [247.0, 291.0], [254.0, 71.5], [252.0, 414.0], [271.0, 228.0], [266.0, 348.0], [287.0, 389.5], [274.0, 363.0], [286.0, 171.0], [292.0, 222.0], [294.0, 302.0], [300.0, 326.5], [295.0, 443.0], [303.0, 340.0], [313.0, 67.0], [310.0, 267.0], [309.0, 273.0], [319.0, 313.0], [333.0, 347.0], [322.0, 251.0], [335.0, 202.0], [345.0, 105.0], [348.0, 189.0], [344.0, 131.0], [336.0, 199.5], [339.0, 65.0], [353.0, 78.0], [372.0, 109.5], [376.0, 322.0], [368.0, 151.5], [390.0, 73.5], [384.0, 182.0], [389.0, 243.0], [403.0, 64.0], [404.0, 128.0], [405.0, 246.0], [408.0, 207.5], [426.0, 63.0], [422.0, 158.5], [416.0, 166.0], [431.0, 166.0], [424.0, 80.0], [439.0, 124.0], [435.0, 101.0], [447.0, 189.0], [437.0, 212.0], [436.0, 180.0], [444.0, 168.0], [445.0, 125.0], [456.0, 83.5], [462.0, 141.0], [448.0, 215.0], [455.0, 99.0], [459.0, 140.0], [465.0, 179.0], [477.0, 197.0], [464.0, 148.0], [469.0, 236.0], [467.0, 146.0], [476.0, 201.0], [473.0, 135.0], [486.0, 107.0], [491.0, 158.0], [484.0, 194.0], [492.0, 188.5], [487.0, 138.0], [488.0, 140.0], [483.0, 121.0], [499.0, 101.5], [507.0, 159.5], [497.0, 199.0], [517.0, 141.0], [528.0, 148.0], [542.0, 158.5], [514.0, 151.5], [529.0, 191.0], [539.0, 98.0], [574.0, 98.0], [564.0, 148.0], [546.0, 237.0], [548.0, 176.0], [569.0, 204.0], [561.0, 99.0], [599.0, 106.0], [578.0, 134.0], [602.0, 153.0], [603.0, 148.0], [579.0, 157.0], [589.0, 88.0], [631.0, 189.0], [611.0, 128.0], [626.0, 124.0], [632.0, 152.5], [628.0, 134.5], [622.0, 163.0], [616.0, 132.5], [653.0, 119.5], [649.0, 131.0], [663.0, 115.0], [668.0, 135.0], [660.0, 98.5], [658.0, 132.0], [666.0, 125.0], [643.0, 191.0], [672.0, 127.5], [677.0, 97.0], [679.0, 132.0], [722.0, 108.0], [718.0, 79.0], [724.0, 110.0], [712.0, 114.0], [725.0, 119.0], [714.0, 137.0], [737.0, 113.0], [748.0, 138.0], [749.0, 116.0], [767.0, 112.0], [747.0, 128.0], [758.0, 91.0], [763.0, 114.0], [764.0, 87.5], [798.0, 115.0], [781.0, 120.0], [790.0, 122.0], [773.0, 88.0], [785.0, 97.0], [802.0, 113.0], [819.0, 95.0], [825.0, 123.0], [817.0, 67.0], [806.0, 95.0], [895.0, 82.0], [918.0, 83.0], [905.0, 116.0], [928.0, 88.0], [937.0, 100.0], [932.0, 99.0], [947.0, 84.0], [969.0, 98.0], [975.0, 85.0], [1001.0, 81.0], [1033.0, 94.0], [1167.0, 137.0]], "isOverall": false, "label": "Successes", "isController": false}, {"data": [[564.0, 2.0], [546.0, 1.0], [1167.0, 1.0], [631.0, 1.5], [722.0, 2.0], [798.0, 2.0]], "isOverall": false, "label": "Failures", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 1167.0, "title": "Latencies Vs Request"}},
    getOptions: function() {
        return{
            series: {
                lines: {
                    show: false
                },
                points: {
                    show: true
                }
            },
            xaxis: {
                axisLabel: "Global number of requests per second",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            yaxis: {
                axisLabel: "Median Latency in ms",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            legend: { noColumns: 2,show: true, container: '#legendLatencyVsRequest' },
            selection: {
                mode: 'xy'
            },
            grid: {
                hoverable: true // IMPORTANT! this is needed for tooltip to work
            },
            tooltip: true,
            tooltipOpts: {
                content: "%s : Median Latency time at %x req/s was %y ms"
            },
            colors: ["#9ACD32", "#FF6347"]
        };
    },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesLatencyVsRequest"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotLatenciesVsRequest"), dataset, options);
        // setup overview
        $.plot($("#overviewLatenciesVsRequest"), dataset, prepareOverviewOptions(options));
    }
};

// Latencies vs Request
function refreshLatenciesVsRequest() {
        var infos = latenciesVsRequestInfos;
        prepareSeries(infos.data);
        if(isGraph($("#flotLatenciesVsRequest"))){
            infos.createGraph();
        }else{
            var choiceContainer = $("#choicesLatencyVsRequest");
            createLegend(choiceContainer, infos);
            infos.createGraph();
            setGraphZoomable("#flotLatenciesVsRequest", "#overviewLatenciesVsRequest");
            $('#footerLatenciesVsRequest .legendColorBox > div').each(function(i){
                $(this).clone().prependTo(choiceContainer.find("li").eq(i));
            });
        }
};

var hitsPerSecondInfos = {
        data: {"result": {"minY": 234.0, "minX": 1.62937974E12, "maxY": 575.3666666666667, "series": [{"data": [[1.6293798E12, 575.3666666666667], [1.62937992E12, 392.8666666666667], [1.62937974E12, 234.0], [1.62937986E12, 464.43333333333334]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.62937992E12, "title": "Hits Per Second"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of hits / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendHitsPerSecond"
                },
                selection: {
                    mode : 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y.2 hits/sec"
                }
            };
        },
        createGraph: function createGraph() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesHitsPerSecond"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotHitsPerSecond"), dataset, options);
            // setup overview
            $.plot($("#overviewHitsPerSecond"), dataset, prepareOverviewOptions(options));
        }
};

// Hits per second
function refreshHitsPerSecond(fixTimestamps) {
    var infos = hitsPerSecondInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 0);
    }
    if (isGraph($("#flotHitsPerSecond"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesHitsPerSecond");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotHitsPerSecond", "#overviewHitsPerSecond");
        $('#footerHitsPerSecond .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
}

var codesPerSecondInfos = {
        data: {"result": {"minY": 0.5166666666666667, "minX": 1.62937974E12, "maxY": 559.4, "series": [{"data": [[1.6293798E12, 559.4], [1.62937992E12, 394.53333333333336], [1.62937974E12, 231.83333333333334], [1.62937986E12, 464.43333333333334]], "isOverall": false, "label": "200", "isController": false}, {"data": [[1.6293798E12, 15.95], [1.62937974E12, 0.5166666666666667]], "isOverall": false, "label": "502", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.62937992E12, "title": "Codes Per Second"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of responses / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendCodesPerSecond"
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "Number of Response Codes %s at %x was %y.2 responses / sec"
                }
            };
        },
    createGraph: function() {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesCodesPerSecond"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotCodesPerSecond"), dataset, options);
        // setup overview
        $.plot($("#overviewCodesPerSecond"), dataset, prepareOverviewOptions(options));
    }
};

// Codes per second
function refreshCodesPerSecond(fixTimestamps) {
    var infos = codesPerSecondInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 0);
    }
    if(isGraph($("#flotCodesPerSecond"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesCodesPerSecond");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotCodesPerSecond", "#overviewCodesPerSecond");
        $('#footerCodesPerSecond .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var transactionsPerSecondInfos = {
        data: {"result": {"minY": 0.5166666666666667, "minX": 1.62937974E12, "maxY": 559.4, "series": [{"data": [[1.6293798E12, 559.4], [1.62937992E12, 394.53333333333336], [1.62937974E12, 231.83333333333334], [1.62937986E12, 464.43333333333334]], "isOverall": false, "label": "discussion-forum-user-upvotes-success", "isController": false}, {"data": [[1.6293798E12, 15.95], [1.62937974E12, 0.5166666666666667]], "isOverall": false, "label": "discussion-forum-user-upvotes-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.62937992E12, "title": "Transactions Per Second"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of transactions / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendTransactionsPerSecond"
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y transactions / sec"
                }
            };
        },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesTransactionsPerSecond"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotTransactionsPerSecond"), dataset, options);
        // setup overview
        $.plot($("#overviewTransactionsPerSecond"), dataset, prepareOverviewOptions(options));
    }
};

// Transactions per second
function refreshTransactionsPerSecond(fixTimestamps) {
    var infos = transactionsPerSecondInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyTransactionsPerSecond");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 0);
    }
    if(isGraph($("#flotTransactionsPerSecond"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesTransactionsPerSecond");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotTransactionsPerSecond", "#overviewTransactionsPerSecond");
        $('#footerTransactionsPerSecond .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var totalTPSInfos = {
        data: {"result": {"minY": 0.5166666666666667, "minX": 1.62937974E12, "maxY": 559.4, "series": [{"data": [[1.6293798E12, 559.4], [1.62937992E12, 394.53333333333336], [1.62937974E12, 231.83333333333334], [1.62937986E12, 464.43333333333334]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [[1.6293798E12, 15.95], [1.62937974E12, 0.5166666666666667]], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.62937992E12, "title": "Total Transactions Per Second"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of transactions / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendTotalTPS"
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y transactions / sec"
                },
                colors: ["#9ACD32", "#FF6347"]
            };
        },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesTotalTPS"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotTotalTPS"), dataset, options);
        // setup overview
        $.plot($("#overviewTotalTPS"), dataset, prepareOverviewOptions(options));
    }
};

// Total Transactions per second
function refreshTotalTPS(fixTimestamps) {
    var infos = totalTPSInfos;
    // We want to ignore seriesFilter
    prepareSeries(infos.data, false, true);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 0);
    }
    if(isGraph($("#flotTotalTPS"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesTotalTPS");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotTotalTPS", "#overviewTotalTPS");
        $('#footerTotalTPS .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

// Collapse the graph matching the specified DOM element depending the collapsed
// status
function collapse(elem, collapsed){
    if(collapsed){
        $(elem).parent().find(".fa-chevron-up").removeClass("fa-chevron-up").addClass("fa-chevron-down");
    } else {
        $(elem).parent().find(".fa-chevron-down").removeClass("fa-chevron-down").addClass("fa-chevron-up");
        if (elem.id == "bodyBytesThroughputOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshBytesThroughputOverTime(true);
            }
            document.location.href="#bytesThroughputOverTime";
        } else if (elem.id == "bodyLatenciesOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshLatenciesOverTime(true);
            }
            document.location.href="#latenciesOverTime";
        } else if (elem.id == "bodyCustomGraph") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshCustomGraph(true);
            }
            document.location.href="#responseCustomGraph";
        } else if (elem.id == "bodyConnectTimeOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshConnectTimeOverTime(true);
            }
            document.location.href="#connectTimeOverTime";
        } else if (elem.id == "bodyResponseTimePercentilesOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshResponseTimePercentilesOverTime(true);
            }
            document.location.href="#responseTimePercentilesOverTime";
        } else if (elem.id == "bodyResponseTimeDistribution") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshResponseTimeDistribution();
            }
            document.location.href="#responseTimeDistribution" ;
        } else if (elem.id == "bodySyntheticResponseTimeDistribution") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshSyntheticResponseTimeDistribution();
            }
            document.location.href="#syntheticResponseTimeDistribution" ;
        } else if (elem.id == "bodyActiveThreadsOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshActiveThreadsOverTime(true);
            }
            document.location.href="#activeThreadsOverTime";
        } else if (elem.id == "bodyTimeVsThreads") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshTimeVsThreads();
            }
            document.location.href="#timeVsThreads" ;
        } else if (elem.id == "bodyCodesPerSecond") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshCodesPerSecond(true);
            }
            document.location.href="#codesPerSecond";
        } else if (elem.id == "bodyTransactionsPerSecond") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshTransactionsPerSecond(true);
            }
            document.location.href="#transactionsPerSecond";
        } else if (elem.id == "bodyTotalTPS") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshTotalTPS(true);
            }
            document.location.href="#totalTPS";
        } else if (elem.id == "bodyResponseTimeVsRequest") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshResponseTimeVsRequest();
            }
            document.location.href="#responseTimeVsRequest";
        } else if (elem.id == "bodyLatenciesVsRequest") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshLatenciesVsRequest();
            }
            document.location.href="#latencyVsRequest";
        }
    }
}

/*
 * Activates or deactivates all series of the specified graph (represented by id parameter)
 * depending on checked argument.
 */
function toggleAll(id, checked){
    var placeholder = document.getElementById(id);

    var cases = $(placeholder).find(':checkbox');
    cases.prop('checked', checked);
    $(cases).parent().children().children().toggleClass("legend-disabled", !checked);

    var choiceContainer;
    if ( id == "choicesBytesThroughputOverTime"){
        choiceContainer = $("#choicesBytesThroughputOverTime");
        refreshBytesThroughputOverTime(false);
    } else if(id == "choicesResponseTimesOverTime"){
        choiceContainer = $("#choicesResponseTimesOverTime");
        refreshResponseTimeOverTime(false);
    }else if(id == "choicesResponseCustomGraph"){
        choiceContainer = $("#choicesResponseCustomGraph");
        refreshCustomGraph(false);
    } else if ( id == "choicesLatenciesOverTime"){
        choiceContainer = $("#choicesLatenciesOverTime");
        refreshLatenciesOverTime(false);
    } else if ( id == "choicesConnectTimeOverTime"){
        choiceContainer = $("#choicesConnectTimeOverTime");
        refreshConnectTimeOverTime(false);
    } else if ( id == "choicesResponseTimePercentilesOverTime"){
        choiceContainer = $("#choicesResponseTimePercentilesOverTime");
        refreshResponseTimePercentilesOverTime(false);
    } else if ( id == "choicesResponseTimePercentiles"){
        choiceContainer = $("#choicesResponseTimePercentiles");
        refreshResponseTimePercentiles();
    } else if(id == "choicesActiveThreadsOverTime"){
        choiceContainer = $("#choicesActiveThreadsOverTime");
        refreshActiveThreadsOverTime(false);
    } else if ( id == "choicesTimeVsThreads"){
        choiceContainer = $("#choicesTimeVsThreads");
        refreshTimeVsThreads();
    } else if ( id == "choicesSyntheticResponseTimeDistribution"){
        choiceContainer = $("#choicesSyntheticResponseTimeDistribution");
        refreshSyntheticResponseTimeDistribution();
    } else if ( id == "choicesResponseTimeDistribution"){
        choiceContainer = $("#choicesResponseTimeDistribution");
        refreshResponseTimeDistribution();
    } else if ( id == "choicesHitsPerSecond"){
        choiceContainer = $("#choicesHitsPerSecond");
        refreshHitsPerSecond(false);
    } else if(id == "choicesCodesPerSecond"){
        choiceContainer = $("#choicesCodesPerSecond");
        refreshCodesPerSecond(false);
    } else if ( id == "choicesTransactionsPerSecond"){
        choiceContainer = $("#choicesTransactionsPerSecond");
        refreshTransactionsPerSecond(false);
    } else if ( id == "choicesTotalTPS"){
        choiceContainer = $("#choicesTotalTPS");
        refreshTotalTPS(false);
    } else if ( id == "choicesResponseTimeVsRequest"){
        choiceContainer = $("#choicesResponseTimeVsRequest");
        refreshResponseTimeVsRequest();
    } else if ( id == "choicesLatencyVsRequest"){
        choiceContainer = $("#choicesLatencyVsRequest");
        refreshLatenciesVsRequest();
    }
    var color = checked ? "black" : "#818181";
    if(choiceContainer != null) {
        choiceContainer.find("label").each(function(){
            this.style.color = color;
        });
    }
}


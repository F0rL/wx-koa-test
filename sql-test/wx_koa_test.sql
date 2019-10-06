/*
 Navicat Premium Data Transfer

 Source Server         : kuma
 Source Server Type    : MySQL
 Source Server Version : 80017
 Source Host           : localhost:3306
 Source Schema         : wx_koa_test

 Target Server Type    : MySQL
 Target Server Version : 80017
 File Encoding         : 65001

 Date: 06/10/2019 16:54:16
*/

SET NAMES utf8mb4;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
-- Table structure for book
-- ----------------------------
DROP TABLE IF EXISTS `book`;
CREATE TABLE `book`  (
  `id` int(11) NOT NULL,
  `fav_nums` int(11) NULL DEFAULT 0,
  `created_at` datetime(0) NOT NULL,
  `updated_at` datetime(0) NOT NULL,
  `deleted_at` datetime(0) NULL DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB CHARACTER SET = utf8mb4 COLLATE = utf8mb4_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of book
-- ----------------------------
INSERT INTO `book` VALUES (7, 1, '2019-10-05 23:01:20', '2019-10-05 23:03:08', NULL);
INSERT INTO `book` VALUES (65, 1, '2019-10-05 23:07:29', '2019-10-05 23:07:29', NULL);

-- ----------------------------
-- Table structure for comment
-- ----------------------------
DROP TABLE IF EXISTS `comment`;
CREATE TABLE `comment`  (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `content` varchar(12) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL,
  `nums` int(11) NULL DEFAULT 0,
  `book_id` int(11) NULL DEFAULT NULL,
  `created_at` datetime(0) NOT NULL,
  `updated_at` datetime(0) NOT NULL,
  `deleted_at` datetime(0) NULL DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB CHARACTER SET = utf8mb4 COLLATE = utf8mb4_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of comment
-- ----------------------------
INSERT INTO `comment` VALUES (1, '写的不错', 3, 1061, '2019-10-05 17:45:26', '2019-10-05 17:49:53', NULL);
INSERT INTO `comment` VALUES (2, '人生如戏', 0, 1031, '2019-10-05 22:26:47', '2019-10-05 22:26:47', NULL);
INSERT INTO `comment` VALUES (3, '黑客与画家', 1, 7, '2019-10-05 23:17:52', '2019-10-05 23:25:54', NULL);
INSERT INTO `comment` VALUES (4, 'python很简单', 0, 183, '2019-10-05 23:27:18', '2019-10-05 23:27:18', NULL);

-- ----------------------------
-- Table structure for favor
-- ----------------------------
DROP TABLE IF EXISTS `favor`;
CREATE TABLE `favor`  (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `uid` int(11) NULL DEFAULT NULL,
  `art_id` int(11) NULL DEFAULT NULL,
  `type` int(11) NULL DEFAULT NULL,
  `created_at` datetime(0) NOT NULL,
  `updated_at` datetime(0) NOT NULL,
  `deleted_at` datetime(0) NULL DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 33 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of favor
-- ----------------------------
INSERT INTO `favor` VALUES (11, 1, 1061, 400, '2019-10-04 18:01:03', '2019-10-04 18:01:06', NULL);
INSERT INTO `favor` VALUES (29, 1, 7, 400, '2019-10-05 23:03:08', '2019-10-05 23:03:08', NULL);
INSERT INTO `favor` VALUES (30, 1, 65, 400, '2019-10-05 23:07:29', '2019-10-05 23:07:29', NULL);
INSERT INTO `favor` VALUES (31, 1, 1, 200, '2019-10-05 23:14:56', '2019-10-05 23:14:56', NULL);
INSERT INTO `favor` VALUES (32, 1, 1, 300, '2019-10-06 00:52:03', '2019-10-06 00:52:03', NULL);

-- ----------------------------
-- Table structure for flow
-- ----------------------------
DROP TABLE IF EXISTS `flow`;
CREATE TABLE `flow`  (
  `created_at` datetime(0) NULL DEFAULT NULL,
  `status` smallint(6) NULL DEFAULT NULL,
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `index` int(11) NOT NULL,
  `type` int(11) NOT NULL,
  `art_id` int(11) NOT NULL,
  `updated_at` datetime(0) NULL DEFAULT NULL,
  `deleted_at` datetime(0) NULL DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 9 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_bin ROW_FORMAT = Compact;

-- ----------------------------
-- Records of flow
-- ----------------------------
INSERT INTO `flow` VALUES ('2019-04-05 17:11:14', 1, 1, 1, 200, 3, NULL, NULL);
INSERT INTO `flow` VALUES ('2019-04-05 17:11:21', 1, 2, 2, 300, 2, NULL, NULL);
INSERT INTO `flow` VALUES ('2019-04-05 17:11:27', 1, 3, 3, 200, 2, NULL, NULL);
INSERT INTO `flow` VALUES ('2019-04-02 17:11:50', 1, 4, 4, 100, 2, NULL, NULL);
INSERT INTO `flow` VALUES ('2019-04-17 17:11:56', 1, 5, 6, 300, 1, NULL, NULL);
INSERT INTO `flow` VALUES ('2019-04-05 17:12:00', 1, 6, 7, 200, 1, NULL, NULL);
INSERT INTO `flow` VALUES ('2019-04-05 17:12:04', 1, 7, 8, 100, 1, NULL, NULL);
INSERT INTO `flow` VALUES ('2019-04-05 17:12:07', 1, 8, 5, 200, 4, NULL, NULL);

-- ----------------------------
-- Table structure for hot_book
-- ----------------------------
DROP TABLE IF EXISTS `hot_book`;
CREATE TABLE `hot_book`  (
  `created_at` datetime(0) NULL DEFAULT NULL,
  `status` smallint(6) NULL DEFAULT NULL,
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `index` int(11) NULL DEFAULT NULL,
  `image` varchar(64) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL,
  `author` varchar(25) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL,
  `title` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL,
  `updated_at` datetime(0) NULL DEFAULT NULL,
  `deleted_at` datetime(0) NULL DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 51665 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci ROW_FORMAT = Compact;

-- ----------------------------
-- Records of hot_book
-- ----------------------------
INSERT INTO `hot_book` VALUES ('0000-00-00 00:00:00', 1, 7, 1, 'https://img3.doubanio.com/lpic/s4669554.jpg', '[美]保罗·格雷厄姆', '黑客与画家', NULL, NULL);
INSERT INTO `hot_book` VALUES ('0000-00-00 00:00:00', 1, 65, 2, 'https://img3.doubanio.com/lpic/s4059293.jpg', 'MarkPilgrim', 'Dive Into Python 3', NULL, NULL);
INSERT INTO `hot_book` VALUES ('0000-00-00 00:00:00', 1, 183, 3, 'https://img3.doubanio.com/lpic/s4387251.jpg', 'MagnusLieHetland', 'Python基础教程', NULL, NULL);
INSERT INTO `hot_book` VALUES ('0000-00-00 00:00:00', 1, 1002, 4, 'https://img3.doubanio.com/lpic/s6384944.jpg', '[哥伦比亚]加西亚·马尔克斯', '百年孤独', NULL, NULL);
INSERT INTO `hot_book` VALUES ('0000-00-00 00:00:00', 1, 1049, 5, 'https://img1.doubanio.com/view/subject/l/public/s29775868.jpg', '[日]岩井俊二', '情书', NULL, NULL);
INSERT INTO `hot_book` VALUES ('0000-00-00 00:00:00', 1, 1061, 6, 'https://img3.doubanio.com/lpic/s1358984.jpg', '[美]乔治·R·R·马丁', '冰与火之歌（卷一）', NULL, NULL);
INSERT INTO `hot_book` VALUES ('0000-00-00 00:00:00', 1, 1120, 7, 'https://img3.doubanio.com/lpic/s4610502.jpg', '[日]东野圭吾', '白夜行', NULL, NULL);
INSERT INTO `hot_book` VALUES ('0000-00-00 00:00:00', 1, 1166, 8, 'https://img1.doubanio.com/lpic/s23632058.jpg', '金庸', '天龙八部', NULL, NULL);
INSERT INTO `hot_book` VALUES ('0000-00-00 00:00:00', 1, 1308, 9, 'https://img3.doubanio.com/lpic/s3814606.jpg', '[日]东野圭吾', '恶意', NULL, NULL);
INSERT INTO `hot_book` VALUES ('0000-00-00 00:00:00', 1, 1339, 10, 'https://img3.doubanio.com/lpic/s1074376.jpg', '[英]J·K·罗琳', '哈利·波特与阿兹卡班的囚徒', NULL, NULL);
INSERT INTO `hot_book` VALUES ('0000-00-00 00:00:00', 1, 1383, 11, 'https://img1.doubanio.com/lpic/s3557848.jpg', '韩寒', '他的国', NULL, NULL);
INSERT INTO `hot_book` VALUES ('0000-00-00 00:00:00', 1, 1398, 12, 'https://img1.doubanio.com/lpic/s2752367.jpg', '[英]J·K·罗琳', '哈利·波特与死亡圣器', NULL, NULL);
INSERT INTO `hot_book` VALUES ('0000-00-00 00:00:00', 1, 1560, 13, 'https://img1.doubanio.com/lpic/s3463069.jpg', '王小波', '三十而立', NULL, NULL);
INSERT INTO `hot_book` VALUES ('0000-00-00 00:00:00', 1, 7821, 14, 'https://img3.doubanio.com/lpic/s6144591.jpg', '[伊朗]玛赞·莎塔碧', '我在伊朗长大', NULL, NULL);
INSERT INTO `hot_book` VALUES ('0000-00-00 00:00:00', 1, 8854, 15, 'https://img1.doubanio.com/lpic/s29494718.jpg', '[日]村上春树', '远方的鼓声', NULL, NULL);
INSERT INTO `hot_book` VALUES ('0000-00-00 00:00:00', 1, 8866, 16, 'https://img3.doubanio.com/lpic/s2393243.jpg', '三毛', '梦里花落知多少', NULL, NULL);
INSERT INTO `hot_book` VALUES ('0000-00-00 00:00:00', 1, 15198, 17, 'https://img1.doubanio.com/lpic/s1080179.jpg', '韩寒', '像少年啦飞驰', NULL, NULL);
INSERT INTO `hot_book` VALUES ('0000-00-00 00:00:00', 1, 15984, 18, 'https://img3.doubanio.com/lpic/s27970504.jpg', '鲁迅', '朝花夕拾', NULL, NULL);
INSERT INTO `hot_book` VALUES ('0000-00-00 00:00:00', 1, 21050, 19, 'https://img3.doubanio.com/lpic/s2853431.jpg', '[日]井上雄彦', '灌篮高手31', NULL, NULL);
INSERT INTO `hot_book` VALUES ('0000-00-00 00:00:00', 1, 51664, 20, 'https://img3.doubanio.com/lpic/s29034294.jpg', '[日]新井一二三', '东京时味记', NULL, NULL);

-- ----------------------------
-- Table structure for movie
-- ----------------------------
DROP TABLE IF EXISTS `movie`;
CREATE TABLE `movie`  (
  `created_at` datetime(0) NULL DEFAULT NULL,
  `status` smallint(6) NULL DEFAULT NULL,
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `image` varchar(64) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL,
  `content` varchar(300) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL,
  `pubdate` date NULL DEFAULT NULL,
  `fav_nums` smallint(6) NULL DEFAULT NULL,
  `title` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL,
  `type` int(11) NULL DEFAULT NULL,
  `updated_at` datetime(0) NULL DEFAULT NULL,
  `deleted_at` datetime(0) NULL DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 3 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci ROW_FORMAT = Compact;

-- ----------------------------
-- Records of movie
-- ----------------------------
INSERT INTO `movie` VALUES ('0000-00-00 00:00:00', 1, 1, 'images/movie.8.png', '人生不能像做菜，把所有的料准备好才下锅', '2018-06-22', 123, '李安《饮食男女 》', 100, '2019-10-05 22:41:54', NULL);
INSERT INTO `movie` VALUES ('0000-00-00 00:00:00', 1, 2, 'images/movie.4.png', '在变换的生命里，岁月原来是最大的小偷', '2018-06-22', 321, '罗启锐《岁月神偷》', 100, '2019-04-09 04:34:38', NULL);

-- ----------------------------
-- Table structure for music
-- ----------------------------
DROP TABLE IF EXISTS `music`;
CREATE TABLE `music`  (
  `created_at` datetime(0) NULL DEFAULT NULL,
  `status` smallint(6) NULL DEFAULT NULL,
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `image` varchar(64) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL,
  `content` varchar(300) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL,
  `url` varchar(100) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL,
  `pubdate` date NULL DEFAULT NULL,
  `fav_nums` smallint(6) NULL DEFAULT NULL,
  `type` int(11) NULL DEFAULT NULL,
  `title` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL,
  `deleted_at` datetime(0) NULL DEFAULT NULL,
  `updated_at` datetime(0) NULL DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 5 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci ROW_FORMAT = Compact;

-- ----------------------------
-- Records of music
-- ----------------------------
INSERT INTO `music` VALUES ('0000-00-00 00:00:00', 1, 1, 'images/music.7.png', '无人问我粥可温 风雨不见江湖人', 'http://music.163.com/song/media/outer/url?id=393926.mp3', '2018-06-22', 97, 200, '月之门《枫华谷的枫林》', NULL, '2019-10-05 23:14:56');
INSERT INTO `music` VALUES ('0000-00-00 00:00:00', 1, 2, 'images/music.1.png', '你陪我步入蝉夏 越过城市喧嚣', 'http://music.163.com/song/media/outer/url?id=516076896.mp3', '2018-06-22', 47, 200, '花粥 《纸短情长》', NULL, '2019-04-10 09:13:12');
INSERT INTO `music` VALUES ('0000-00-00 00:00:00', 1, 3, 'images/music.3.png', '岁月长，衣裳薄', 'http://music.163.com/song/media/outer/url?id=317245.mp3', '2018-06-22', 44, 200, '杨千嬅《再见二丁目》', NULL, '2019-04-12 11:59:49');
INSERT INTO `music` VALUES ('0000-00-00 00:00:00', 1, 4, 'images/music.5.png', '许多人来来去去，相聚又别离', 'http://music.163.com/song/media/outer/url?id=26427662.mp3', '2018-06-22', 68, 200, '好妹妹 《一个人的北京》', NULL, NULL);

-- ----------------------------
-- Table structure for sentence
-- ----------------------------
DROP TABLE IF EXISTS `sentence`;
CREATE TABLE `sentence`  (
  `created_at` datetime(0) NULL DEFAULT NULL,
  `status` smallint(6) NULL DEFAULT NULL,
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `image` varchar(64) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL,
  `content` varchar(300) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL,
  `pubdate` date NULL DEFAULT NULL,
  `fav_nums` smallint(6) NULL DEFAULT NULL,
  `title` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL,
  `type` int(11) NULL DEFAULT NULL,
  `updated_at` datetime(0) NULL DEFAULT NULL,
  `deleted_at` datetime(0) NULL DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 3 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci ROW_FORMAT = Compact;

-- ----------------------------
-- Records of sentence
-- ----------------------------
INSERT INTO `sentence` VALUES ('0000-00-00 00:00:00', 1, 1, 'images/sentence.6.png', '心上无垢，林间有风', '2018-06-22', 72, '未名', 300, '2019-10-06 00:52:03', NULL);
INSERT INTO `sentence` VALUES ('0000-00-00 00:00:00', 1, 2, 'images/sentence.2.png', '这个夏天又是一个毕业季', '2018-06-22', 33, '未名', 300, '2019-04-10 09:13:28', NULL);

-- ----------------------------
-- Table structure for user
-- ----------------------------
DROP TABLE IF EXISTS `user`;
CREATE TABLE `user`  (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `nickname` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL,
  `email` varchar(128) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL,
  `password` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL,
  `openid` varchar(64) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL,
  `created_at` datetime(0) NOT NULL,
  `updated_at` datetime(0) NOT NULL,
  `deleted_at` datetime(0) NULL DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE,
  UNIQUE INDEX `email`(`email`) USING BTREE,
  UNIQUE INDEX `openid`(`openid`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 2 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of user
-- ----------------------------
INSERT INTO `user` VALUES (1, NULL, NULL, NULL, 'oOx5us3_YNdxZU7CdmTteoRufmfI', '2019-09-27 23:55:26', '2019-09-27 23:55:26', NULL);

SET FOREIGN_KEY_CHECKS = 1;

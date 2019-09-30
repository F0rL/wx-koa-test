// music sentence movie
// 共同属性
// image
// title
// pubdate
// content
// fav_nums
// type 代号
//sequelize不支持class的方式定义,无法声明一个基类,取巧

const { sequelize } = require("../../core/db");
const { Sequelize, Model } = require("sequelize");

const classicFields = {
  image: Sequelize.STRING,
  content: Sequelize.STRING,
  pubdate: Sequelize.DATEONLY,
  fav_nums: Sequelize.INTEGER,
  title: Sequelize.STRING,
  type: Sequelize.TINYINT
};

class Movie extends Model {}

Movie.init(classicFields, {
  sequelize,
  tableName: "movie"
});

class Sentence extends Model {}

Sentence.init(classicFields, {
  sequelize,
  tableName: "sentence"
});

class Music extends Model {}

const musicFields = Object.assign({ url: Sequelize.STRING }, classicFields);

Music.init(musicFields, {
  sequelize,
  tableName: "music"
});

module.exports = {
  Movie,
  Sentence,
  Music
}

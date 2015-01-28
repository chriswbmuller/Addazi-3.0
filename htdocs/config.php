<?php  // Moodle configuration file

unset($CFG);
global $CFG;
$CFG = new stdClass();

$CFG->dbtype    = 'mysqli';
$CFG->dblibrary = 'native';
$CFG->dbhost    = 'localhost';
$CFG->dbname    = 'bitnami_moodle';
$CFG->dbuser    = 'bitnami';
$CFG->dbpass    = '46aa8227e6';
$CFG->prefix    = 'mdl_';
$CFG->dboptions = array (
  'dbpersist' => 0,
  'dbport' => 3306,
  'dbsocket' => '/opt/bitnami/mysql/tmp/mysql.sock',
);

if (isset($_SERVER['HTTPS']) && $_SERVER['HTTPS'] == 'on') {
    $CFG->wwwroot   = 'https://' . $_SERVER['HTTP_HOST'];
} else {
    $CFG->wwwroot   = 'http://' . $_SERVER['HTTP_HOST'];
};
$CFG->dataroot  = '/opt/bitnami/apps/moodle/moodledata';
$CFG->admin     = 'admin';

$CFG->directorypermissions = 02775;

$CFG->passwordsaltalt1 = 'd4b0048abe600882a9f9a768c9bf5e8a5a0035c9f065bc0dd44d94fdee6bd7a7';
$CFG->passwordsaltmain = '9498b1ad18bd0eeba3b1bc037b582d947f860048a5f2abe0088a2f4eebfe6bb2';
require_once(dirname(__FILE__) . '/lib/setup.php');

// There is no php closing tag in this file,
// it is intentional because it prevents trailing whitespace problems!

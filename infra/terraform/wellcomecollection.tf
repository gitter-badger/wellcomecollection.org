variable "aws_access_key" {}
variable "aws_secret_key" {}
variable "wellcomecollection_key_path" {}
variable "wellcomecollection_key_name" {}
variable "build_number" {}
variable "build_bucket" {}

module "wellcomecollection" {
  source                       = "templates/"
  project_name                 = "wellcomecollection"
  launch_template              = "${file("launch-script.tpl")}"
  aws_region                   = "eu-west-1"
  aws_availability_zones       = "eu-west-1a"
  aws_node_ami                 = "ami-ffaad08c"
  aws_access_key               = "${var.aws_access_key}"
  aws_secret_key               = "${var.aws_secret_key}"
  wellcomecollection_key_path  = "${var.wellcomecollection_key_path}"
  wellcomecollection_key_name  = "${var.wellcomecollection_key_name}"
  build_number                 = "${var.build_number}"
  build_bucket                 = "${var.build_bucket}"
  build_branch                 = "master"
}
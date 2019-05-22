class User < ApplicationRecord
	validates :name, presence: :true, uniqueness: { case_sensitive: false }
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable,
         :validatable, authentication_keys: [:login]

  def self.find_first_by_auth_conditions(warden_conditions)
    conditions = warden_conditions.dup
    if login = conditions.delete(:login)
      where(conditions).where(["lower(name) = :value OR lower(email) = :value", { :value => login.downcase }]).first
    else
    if conditions[:name].nil?
      where(conditions).first
    else
      where(name: conditions[:name]).first
    end
    end
  end
	
	attr_writer :login
  def login
    @login || self.name || self.email
  end
end
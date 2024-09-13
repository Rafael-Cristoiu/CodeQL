class UserService {
    private userData: { [key: string]: string } = {
      user1: 'password123',
      user2: 'password456',
    };
  
    public authenticate(username: string, password: string): boolean {
      try {
        if (this.userData[username] === password) {
          return true;
        } else {
          throw new Error('Invalid credentials');
        }
      } catch (error) {
        console.error(`Authentication failed for user: ${username}. Error details: ${error.message}`);
        return false;
      }
    }
  }
  
  const userService = new UserService();
  userService.authenticate('user1', 'wrongpassword');
  
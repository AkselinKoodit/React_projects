import React from "react";

const Form = ({ submit, fill }) => {
  return (
    <div className="form">
      <form onSubmit={submit}>
        <div>
          <label htmlFor="firstname">First name</label>
          <input
            type="text"
            name="firstname"
            id="firstname"
            onChange={fill}
            required
          />
        </div>
        <div>
          <label htmlFor="lastname">Last name</label>
          <input
            type="text"
            name="lastname"
            id="lastname"
            onChange={fill}
            required
          />
        </div>
        <div>
          <label htmlFor="phonenumber">Phone number</label>
          <input
            type="tel"
            name="phonenumber"
            id="phonenumber"
            onChange={fill}
            required
          />
        </div>
        <div>
          <label htmlFor="message">Message</label>
          <textarea
            name="message"
            id="message"
            onChange={fill}
            required
          ></textarea>
        </div>
        <div>
          <label htmlFor="role">Role</label>
          <select name="role" onChange={fill} id="role">
            <option value="student">Student</option>
            <option value="wizard">Wizard</option>
            <option value="maiden">Maiden in distress</option>
            <option value="loony">Village loony</option>
            <option value="drunkard">Drunkard</option>
            <option value="knight">Valiant knight</option>
            <option value="king">King</option>
            <option value="butcher">Butcher</option>
            <option value="witch">Witch</option>
            <option value="monk">Monk</option>
            <option value="smith">Smith</option>
            <option value="jester">Jester</option>
            <option value="peasant">Peasant</option>
          </select>
        </div>
        <input type="submit" value="Send me now!" />
      </form>
    </div>
  );
};

export default Form;

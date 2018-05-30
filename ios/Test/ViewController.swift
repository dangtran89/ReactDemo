//
//  ViewController.swift
//  Test
//
//  Created by DangTran on 5/25/18.
//  Copyright © 2018 DangTran. All rights reserved.
//

import UIKit
import React

class ViewController: UIViewController {

    override func viewDidLoad() {
        super.viewDidLoad()
        // Do any additional setup after loading the view, typically from a nib.
        
        
        let jsCodeLocation = URL(string: "http://localhost:8081/App.bundle?platform=ios")
        let mockData:NSDictionary = [:]
        
        let rootView = RCTRootView(
            bundleURL: jsCodeLocation,
            moduleName: "DemoProject",
            initialProperties: mockData as [NSObject : AnyObject],
            launchOptions: nil
        )
        let vc = UIViewController()
        vc.view.addSubview(rootView!)
        //vc.view = rootView
        self.present(vc, animated: true, completion: nil)
    }

    override func didReceiveMemoryWarning() {
        super.didReceiveMemoryWarning()
        // Dispose of any resources that can be recreated.
    }

    @IBAction func highScoreButtonTapped(sender : UIButton) {
        NSLog("Hello")
    }

}

